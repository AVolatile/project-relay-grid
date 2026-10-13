import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import { data } from "./creative-data.mjs";
const base = process.env.RELAYGRID_BASE_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({
  executablePath:
    process.env.RELAYGRID_CHROME ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage({
  viewport: { width: 1800, height: 1300 },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
});
const output = "portfolio-assets/exports";
await fs.mkdir(output, { recursive: true });
await page.goto(base + "/campaign/");
await page.getByRole("heading", { level: 1 }).waitFor({ state: "visible" });
await page.evaluate(() => document.fonts.ready);
await page.addStyleTag({
  content:
    ".campaign-grid{display:block}.campaign-grid figure{margin-bottom:40px}.campaign-art{width:1200px;height:1200px;aspect-ratio:auto;padding:75px}.campaign-landscape{width:1600px;height:900px}.campaign-art .logo{font-size:48px;gap:18px}.campaign-art .brand-symbol{height:64px;width:64px}.campaign-art-top>span{font-size:16px;letter-spacing:2px}.campaign-eyebrow{font-size:19px;letter-spacing:3px}.campaign-art-copy{padding-top:70px;margin-top:35px}.campaign-art-copy h2{font-size:90px;letter-spacing:-4px;max-width:1000px;line-height:1.08;margin-top:35px}.campaign-art-copy p{font-size:28px;margin-top:45px}.campaign-art-bottom{font-size:17px}.campaign-art-bottom>span:last-child{font-size:22px;gap:20px}.campaign-art-bottom svg{height:26px;width:26px}.campaign-motif{bottom:150px;left:75px;right:75px;height:200px}.campaign-motif-grid .campaign-motif>span{height:80px;width:80px}.campaign-motif-grid .campaign-motif>i{width:100px}.campaign-motif-growth .campaign-motif{height:350px;bottom:150px;left:auto}.campaign-motif-flow .campaign-motif>span{height:100px;width:100px}.campaign-motif-flow .campaign-motif>span svg{height:45px;width:45px}.campaign-motif-flow .campaign-motif>i{width:90px}.campaign-landscape .campaign-art-copy{padding-top:25px;margin-top:35px}.campaign-landscape .campaign-art-copy h2{font-size:88px;max-width:1220px}.campaign-landscape .campaign-art-copy p{font-size:28px;margin-top:35px}.campaign-landscape .campaign-motif{bottom:95px}.campaign-landscape .campaign-art-bottom{margin-top:65px}",
});
for (const c of data.campaigns) {
  await page
    .locator(`#campaign-${c.id}`)
    .screenshot({ path: `${output}/campaign-${c.id}.png` });
}
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(base + "/emails/");
await page.getByRole("heading", { level: 1 }).waitFor({ state: "visible" });
await page.evaluate(() => document.fonts.ready);
for (const e of data.emails) {
  await page
    .locator(`#email-${e.id}`)
    .screenshot({ path: `${output}/email-${e.id}.png` });
}
for (const [route, name, fullPage] of [
  ["/", "homepage", true],
  ["/dashboard/", "dashboard", true],
  ["/workflows/builder/", "workflow-builder", true],
  ["/analytics/", "analytics", true],
  ["/brand/", "brand-system", true],
  ["/case-study/", "case-study", true],
]) {
  await page.goto(base + route);
  await page.getByRole("heading", { level: 1 }).waitFor({ state: "visible" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${output}/${name}-1440.png`, fullPage });
  if (route === "/")
    await page.screenshot({ path: `${output}/homepage-hero-1440.png` });
}
await page.setViewportSize({ width: 375, height: 900 });
for (const [route, name] of [
  ["/", "homepage"],
  ["/dashboard/", "dashboard"],
  ["/workflows/builder/", "workflow-builder"],
]) {
  await page.goto(base + route);
  await page.screenshot({ path: `${output}/${name}-375.png`, fullPage: true });
}
await browser.close();
console.log(
  `Exported 6 campaign PNGs, 3 email PNGs, and 10 presentation screenshots to ${output}.`,
);
