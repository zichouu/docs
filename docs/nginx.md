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
```conf{3}
server {
    listen 80;
    return 301 https://$host$request_uri;
}
```

## Gzip
```conf{2-9}
http {
    gzip_static      on;
    gzip             on;
    # gzip_buffers     32 4K;
    gzip_comp_level  1;
    gzip_min_length  0;
    gzip_types       application/javascript text/css text/xml image/svg+xml;
    gzip_disable     "MSIE [1-6]\.";
    gzip_vary        on;
}
```

## Vue Router History
```conf{3}
server {
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## ssl_reject_handshake
``` conf {3}
server {
    listen 443 default_server;
    ssl_reject_handshake  on;
}
```

## 完整样例
```
#user  nobody;

# 进程数
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    # 每个进程的最大连接数
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    # 隐藏nginx版本号
    server_tokens off;

    sendfile       on;
    tcp_nopush     on;

    # keepalive_timeout  0;
    keepalive_timeout  65;

    # gzip压缩
    gzip_static      on;
    gzip             on;
    gzip_buffers     32 4K;
    gzip_comp_level  1;
    gzip_min_length  0;
    gzip_types       application/javascript text/css text/xml image/svg+xml;
    gzip_disable     "MSIE [1-6]\.";
    gzip_vary        on;

    # http跳转https
    server {
        listen 80 default_server;
        listen [::]:80 default_server;

        return 301 https://$host$request_uri;
    }

    # 默认ssl拒绝握手
    server {
        listen 443 default_server;
        listen [::]:443 default_server;

        ssl_reject_handshake on;
    }

    # 你的虚拟主机配置
    server {
       listen       443 ssl http2;
       listen       [::]:443 ssl http2;
       server_name  你的域名;

       ssl_certificate      证书路径;
       ssl_certificate_key  私钥路径;

       ssl_session_cache    shared:SSL:1m;
       ssl_session_timeout  5m;

       ssl_ciphers  HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers  on;

       location / {
           root   文件根目录;
           index  index.html index.htm;

           # Vue Router History
           try_files $uri $uri/ /index.html;
       }
    }
}
```