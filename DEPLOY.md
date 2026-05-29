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

## Option C — cPanel Git Version Control (recommended for updates)

cPanel shared hosting cannot build Next.js, so the built `out/` folder is
committed to the repo and `.cpanel.yml` copies it into `public_html` on deploy.

### One-time setup
1. **Deploy key (private repo auth):** cPanel → **SSH Access** → **Manage SSH
   Keys** → generate a key (or reuse one) → **View/Download** the *public* key.
   Add it to GitHub → repo **Settings → Deploy keys → Add** (read access is
   enough). Authorize the key in cPanel.
2. cPanel → **Git Version Control** → **Create** → *Clone a Repository*:
   - **Clone URL:** `git@github.com:RiffiHamza/anfa_soft.git`
   - **Repository Path:** e.g. `repositories/anfa_soft` (NOT public_html)
3. After clone, open the repo → **Pull or Deploy** → **Deploy HEAD Commit**.
   `.cpanel.yml` runs and copies `out/.` → `public_html`.

### Every update
```bash
npm run build                              # regenerate ./out
git add -A && git commit -m "update site"
git push origin main
```
Then cPanel → **Git Version Control** → repo → **Pull or Deploy** →
**Update from Remote**, then **Deploy HEAD Commit**.

> `.cpanel.yml` uses `$HOME/public_html`. If your account needs it, hardcode the
> absolute path (`/home/<user>/public_html`).

## Notes

- Clean URLs work because `trailingSlash: true` emits `services/index.html`, etc.
- Re-deploy = rebuild `out/` and re-upload (overwrite).
