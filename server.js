// Passenger startup file for cPanel Node.js (Phusion Passenger).
// Serves the static Next.js export in ./out with zero dependencies.
// Updating = git pull (cPanel "Deploy HEAD Commit") then app restart.

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "out");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".webmanifest": "application/manifest+json",
};

// Map a request path to a file inside ./out, honoring trailingSlash output.
function resolveFile(reqUrl) {
  let p = decodeURIComponent((reqUrl || "/").split("?")[0]);
  if (p.includes("..")) return null; // path traversal guard
  let fp = path.join(ROOT, p);
  try {
    if (fs.existsSync(fp) && fs.statSync(fp).isFile()) return fp;
    if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) {
      const idx = path.join(fp, "index.html");
      if (fs.existsSync(idx)) return idx;
    }
    if (p.endsWith("/")) {
      const idx = path.join(ROOT, p, "index.html");
      if (fs.existsSync(idx)) return idx;
    }
    if (!path.extname(fp)) {
      if (fs.existsSync(fp + ".html")) return fp + ".html";
      if (fs.existsSync(path.join(fp, "index.html"))) return path.join(fp, "index.html");
    }
  } catch {
    /* fall through to 404 */
  }
  return null;
}

const server = http.createServer((req, res) => {
  const fp = resolveFile(req.url);
  if (fp && fp.startsWith(ROOT) && fs.existsSync(fp)) {
    const ext = path.extname(fp).toLowerCase();
    const isAsset = req.url.startsWith("/_next/");
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": isAsset
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate",
    });
    fs.createReadStream(fp).pipe(res);
    return;
  }
  const notFound = path.join(ROOT, "404.html");
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  if (fs.existsSync(notFound)) fs.createReadStream(notFound).pipe(res);
  else res.end("404 Not Found");
});

// Passenger intercepts listen() and binds its own socket; the port is a fallback.
server.listen(process.env.PORT || 3000);
