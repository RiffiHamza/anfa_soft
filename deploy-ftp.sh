#!/usr/bin/env bash
# Upload ./out to a cPanel web root over FTP/FTPS using lftp.
# Usage: fill deploy.env then run ./deploy-ftp.sh
set -euo pipefail
cd "$(dirname "$0")"
[ -f deploy.env ] || { echo "Missing deploy.env (FTP_HOST/FTP_USER/FTP_PASS/FTP_DIR)"; exit 1; }
set -a; . ./deploy.env; set +a
[ -d out ] || { echo "No ./out — run 'npm run build' first"; exit 1; }
command -v lftp >/dev/null || { echo "Install lftp: brew install lftp"; exit 1; }
echo "Deploying ./out -> ${FTP_HOST}:${FTP_DIR}"
lftp -c "
set ftp:ssl-allow true;
set ssl:verify-certificate no;
open -u '${FTP_USER}','${FTP_PASS}' '${FTP_HOST}';
mirror -R --delete --parallel=4 --verbose ./out '${FTP_DIR}';
"
echo "Done."
