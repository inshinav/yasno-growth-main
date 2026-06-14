# Деплой — inshinlab.com/yasno-growth-main/

Статический Vite-сайт в подпапке VPS (как `yasno`, `yasno-growth-strategy`).
Сервер: VPS inshinlab.com, nginx, `root /var/www/html`, конфиг
`/etc/nginx/sites-available/inshinlab.com`. Серверные команды (scp/nginx/chmod)
запускает владелец — Claude Code не ходит по SSH на прод; агент готовит команды
и проверяет curl-ом.

## 1. Сборка (из bash; base — абсолютный, для вложенной подпапки)

```bash
cd /c/Users/Alex/yasno-growth-os
MSYS_NO_PATHCONV=1 npx vite build --base=/yasno-growth-main/
# артефакт: dist/  (отзеркален в _deploy/yasno-growth-main/ для заливки)
```

> ГОТЧА: не задавать base через `VITE_BASE_PATH=/...` в git-bash — MSYS подменяет
> путь. Поэтому флаг `--base` с `MSYS_NO_PATHCONV=1` (как выше), либо PowerShell
> (`npx vite build "--base=/yasno-growth-main/"`).

## 2. Заливка на сервер (scp) — запускает владелец

```bash
# cd + относительный путь — иначе scp примет "C:" за хост.
cd C:\Users\Alex\yasno-growth-os\_deploy
scp -r yasno-growth-main root@inshinlab.com:/var/www/html/
```

## 3. nginx — SPA-fallback (.htaccess nginx игнорирует)

В `/etc/nginx/sites-available/inshinlab.com`, после строки `root /var/www/html;`, добавить:

```nginx
location /yasno-growth-main/ {
    try_files $uri $uri/ /yasno-growth-main/index.html;
}
```

## 4. Права + перезагрузка nginx

```bash
chmod -R a+rX /var/www/html/yasno-growth-main   # scp кладёт под root 600/700 → www-data ловит 403/404
nginx -t && systemctl reload nginx
```

## 5. Проверка (curl)

```bash
curl -sI  https://inshinlab.com/yasno-growth-main/                | head -n1   # ожидаем 200
curl -s   https://inshinlab.com/yasno-growth-main/ | grep -o '/yasno-growth-main/assets/[^"]*' | head
```
