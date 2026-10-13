import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3001);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      const target = path.resolve(root, `.${pathname}`);
      if (!target.startsWith(root + path.sep) && target !== root) {
        res.writeHead(403);
        res.end();
        return;
      }
      let file = target;
      try {
        const stat = await fs.stat(file);
        if (stat.isDirectory()) file = path.join(file, "index.html");
      } catch {
        file = path.join(root, "404.html");
        res.statusCode = 404;
      }
      const body = await fs.readFile(file);
      res.setHeader(
        "Content-Type",
        types[path.extname(file)] || "application/octet-stream",
      );
      res.setHeader("X-Robots-Tag", "noindex, nofollow");
      res.end(body);
    } catch {
      res.writeHead(500);
      res.end("Unable to serve the static preview.");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`RelayGrid static preview: http://127.0.0.1:${port}`),
  );
