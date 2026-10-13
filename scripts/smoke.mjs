import { chromium, expect } from "@playwright/test";
import fs from "node:fs/promises";
import axe from "axe-core";
const base = process.env.RELAYGRID_BASE_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({
  executablePath:
    process.env.RELAYGRID_CHROME ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
const routes = [
  "/",
  "/product/",
  "/solutions/",
  "/pricing/",
  "/resources/",
  "/dashboard/",
  "/workflows/",
  "/workflows/builder/",
  "/approvals/",
  "/analytics/",
  "/integrations/",
  "/login/",
  "/onboarding/",
  "/brand/",
  "/campaign/",
  "/emails/",
  "/case-study/",
];
const widths = [320, 375, 430, 768, 1024, 1280, 1440];
const failures = [];
const violations = [];
const errors = [];
page.on("pageerror", (err) => errors.push(err.message));
for (const width of widths) {
  await page.setViewportSize({ width, height: 1000 });
  for (const route of routes) {
    const response = await page.goto(base + route);
    if (!response?.ok())
      failures.push(`${width} ${route}: HTTP ${response?.status()}`);
    await page.getByRole("heading", { level: 1 }).waitFor({ state: "visible" });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    );
    if (overflow) {
      const offenders = await page.evaluate(() =>
        Array.from(document.querySelectorAll("body *"))
          .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
          .slice(0, 5)
          .map((e) => e.className),
      );
      failures.push(
        `${width} ${route}: horizontal overflow ${JSON.stringify(offenders)}`,
      );
    }
    if (width === 1440) {
      await page.addScriptTag({ content: axe.source });
      const result = await page.evaluate(async () =>
        window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
        }),
      );
      for (const v of result.violations)
        violations.push({
          route,
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        });
    }
  }
  console.log(`Checked ${routes.length} routes at ${width}px`);
}
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(base + "/approvals/");
await page.getByRole("button", { name: /Vendor contract/ }).click();
await expect(page.getByRole("dialog")).toBeVisible();
await page
  .getByRole("button", { name: "Request changes", exact: true })
  .click();
await expect(
  page.getByText("Add a note of at least 8 characters", { exact: false }),
).toBeVisible();
await page
  .getByLabel("Decision note")
  .fill("Please confirm the renewal notice period.");
await page
  .getByRole("button", { name: "Request changes", exact: true })
  .click();
await expect(page.getByRole("dialog")).not.toBeVisible();
await page
  .getByRole("button", { name: "Changes requested", exact: true })
  .click();
await expect(
  page.getByRole("button", { name: /Vendor contract/ }),
).toBeVisible();
await page.getByRole("link", { name: "Overview", exact: true }).click();
await expect(page.getByText("3 decisions.", { exact: false })).toBeVisible();
await page.getByRole("link", { name: "Workflows", exact: true }).click();
await page.getByLabel("Search workflows").fill("no-such-process");
await expect(page.getByText("No workflows match your search.")).toBeVisible();
await page.getByRole("button", { name: "Clear filters" }).click();
await page.getByRole("button", { name: "New workflow" }).click();
await page
  .getByRole("button", { name: "Create workflow", exact: true })
  .click();
await expect(
  page.getByText("Give your workflow a name with at least 3 characters."),
).toBeVisible();
await page
  .getByLabel("Workflow name", { exact: true })
  .fill("Equipment request");
await page
  .getByRole("button", { name: "Create workflow", exact: true })
  .click();
await expect(
  page.getByRole("link", { name: /Equipment request/ }),
).toBeVisible();
await page.getByRole("link", { name: /Equipment request/ }).click();
await expect(
  page.getByRole("heading", { name: "Equipment request", exact: true }),
).toBeVisible();
await expect(
  page.getByRole("button", { name: /Request submitted/ }),
).toBeVisible();
await page.getByRole("button", { name: "Add a step", exact: true }).click();
await page
  .getByRole("dialog")
  .getByLabel("Step name")
  .fill("Notify equipment owner");
await page.getByRole("button", { name: "Add step", exact: true }).click();
await expect(
  page.getByRole("button", { name: /Notify equipment owner/ }),
).toBeVisible();
await page.getByRole("switch", { name: "Enable selected step" }).click();
await expect(page.getByRole("switch")).toHaveAttribute("aria-checked", "false");
await page.getByRole("button", { name: "Test workflow", exact: true }).click();
await expect(page.getByText("Test passed", { exact: false })).toBeVisible();
await page.getByRole("link", { name: "Analytics", exact: true }).click();
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button", { name: "Export report" }).click();
const download = await downloadPromise;
await expect(download.suggestedFilename()).toBe(
  "relaygrid-demo-28-day-activity.csv",
);
await page.goto(base + "/pricing/");
await page.getByRole("button", { name: /Annually/ }).click();
await expect(page.getByText("$119", { exact: false })).toBeVisible();
await page.goto(base + "/login/");
await page.getByRole("button", { name: "Continue to demo" }).click();
await expect(
  page.getByText("Enter a valid email address, or use the demo entry below."),
).toBeVisible();
await page.getByLabel("Work email").fill("alex@example.com");
await page.getByRole("button", { name: "Continue to demo" }).click();
await expect(page.getByText("You’re ready to explore.")).toBeVisible();
await page.goto(base + "/onboarding/");
await page.getByRole("button", { name: "Let’s build your foundation" }).click();
await page.getByRole("button", { name: "Continue", exact: true }).click();
await expect(
  page.getByText("Enter a company name with at least 2 characters."),
).toBeVisible();
await page.getByLabel("Company name").fill("Example Studio");
await page.getByRole("button", { name: "Continue", exact: true }).click();
await page.getByRole("button", { name: "Continue", exact: true }).click();
await page.getByRole("button", { name: "Continue", exact: true }).click();
await page.getByRole("button", { name: "Finish demo setup" }).click();
await expect(
  page.getByRole("link", { name: "Open sample workspace" }),
).toBeVisible();
await page.setViewportSize({ width: 375, height: 900 });
await page.goto(base + "/dashboard/");
await page.getByRole("button", { name: "Open workspace navigation" }).click();
await expect(page.getByRole("dialog")).toBeVisible();
await page.keyboard.press("Escape");
await expect(page.getByRole("dialog")).not.toBeVisible();
await expect(
  page.getByRole("button", { name: "Open workspace navigation" }),
).toBeFocused();
await fs.mkdir("portfolio-assets/exports", { recursive: true });
await fs.writeFile(
  "portfolio-assets/exports/qa.json",
  JSON.stringify(
    {
      routes: routes.length,
      widths,
      responsiveFailures: failures,
      accessibilityViolations: violations,
      browserErrors: [...new Set(errors)],
      interactions: "passed",
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    {
      responsiveFailures: failures,
      accessibilityViolations: violations.map((v) => ({
        route: v.route,
        id: v.id,
        nodes: v.nodes.length,
      })),
      browserErrors: [...new Set(errors)],
      interactions: "passed",
    },
    null,
    2,
  ),
);
await browser.close();
if (failures.length || violations.length || errors.length) process.exitCode = 1;
