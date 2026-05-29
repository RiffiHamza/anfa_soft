# Deploy to Namecheap (cPanel)

This site is a **static export** (`output: "export"`). Deploying means building
the `out/` folder and serving its contents from the web root. No Node runtime.

## 1. Build

```bash
npm install
npm run build        # generates ./out (static HTML/CSS/JS + .htaccess)
```

`out/.htaccess` handles the custom 404, gzip, asset caching, and an HTTPS
redirect (enable HTTPS only after AutoSSL is active for the domain).

## Option A — cPanel File Manager (no credentials shared)

1. Zip the export contents (already produced as `anfa-site.zip`):
   ```bash
   cd out && zip -rqX ../anfa-site.zip . && cd ..
   ```
2. cPanel → **File Manager** → open the target web root:
   - Primary domain: `public_html`
   - Subdomain/addon domain: its document root (e.g. `public_html/anfa`).
3. **Upload** `anfa-site.zip` into that folder.
4. Right-click the zip → **Extract** into the same folder, then delete the zip.
5. Confirm `index.html` and `.htaccess` sit directly in the web root (not in a
   nested `out/` folder). Enable "show hidden files" to see `.htaccess`.
6. cPanel → **SSL/TLS Status** → run **AutoSSL** for the domain.

## Option B — FTP / SFTP (scripted)

Fill in `deploy.env` (do not commit it) and run `./deploy-ftp.sh`:

```
FTP_HOST=ftp.yourdomain.com
FTP_USER=cpaneluser
FTP_PASS=********
FTP_DIR=/public_html        # or /public_html/subdomain
```

## Option C — cPanel Git + Node.js (Passenger)

Runs the committed static export through Passenger via a zero-dependency
`server.js`. The repo is committed with `out/` built, so no build runs on the
server and no `npm install` is needed (server.js uses only Node built-ins).

### One-time setup
1. cPanel → **Git Version Control** → **Create** → *Clone a Repository*:
   - **Clone URL:** `https://github.com/RiffiHamza/anfa_soft.git` (public repo)
   - **Repository Path:** `repositories/anfa_soft`
2. cPanel → **Setup Node.js App** → open the `anfasoftworks.com` app (or create one):
   - **Application root:** `repositories/anfa_soft`
   - **Application startup file:** `server.js`
   - **Node version:** 20.x, **mode:** Production
   - **Save**, then **Restart**. (Do NOT "Run NPM Install" — not required.)
3. Visit `https://anfasoftworks.com`.

### Every update
```bash
npm run build                              # regenerate ./out
git add -A && git commit -m "update site"
git push origin main
```
Then cPanel → **Git Version Control** → repo → **Pull or Deploy** →
**Update from Remote** → **Deploy HEAD Commit**. `.cpanel.yml` touches
`tmp/restart.txt`, so Passenger reloads and serves the new `out/`.
(If a deploy ever doesn't show, hit **Restart** in Setup Node.js App.)

## Notes

- Clean URLs work because `trailingSlash: true` emits `services/index.html`, etc.
- Re-deploy = rebuild `out/` and re-upload (overwrite).
