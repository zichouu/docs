# [nginx](https://nginx.org/en/download.html) 配置

## http2
```conf{2}
server {
    listen 443 ssl http2;
}
```

## IPv4 + IPv6
```conf{2,3,6,7}
server {
    listen 80;
    listen [::]:80;
}
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
}
```

## http 跳转 https
```conf{4}
server {
    listen 80;
    listen [::]:80;
    rewrite ^(.*)$ https://$host$1 permanent;
}
```

## Gzip
```conf{2-9}
http {
    gzip_static on;
    gzip on;
    # gzip_buffers 32 4K;
    gzip_comp_level 1;
    gzip_min_length 0;
    gzip_types application/javascript text/css text/xml image/svg+xml;
    gzip_disable "MSIE [1-6]\.";
    gzip_vary on;
}
```

## Vue Router History
```conf{5}
server {
    location / {
        root html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```