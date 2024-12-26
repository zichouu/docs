# Rust
[官网](https://www.rust-lang.org/zh-CN/)

## Rustup 镜像

`变量 / 值`

RUSTUP_DIST_SERVER
```
https://mirrors.aliyun.com/rustup
```
RUSTUP_UPDATE_ROOT
```
https://mirrors.aliyun.com/rustup/rustup
```

## Cargo 镜像

`~/.cargo/config`

`C:\Users\{你的用户名}\.cargo\config`

::: code-group
``` config [阿里镜像]
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "sparse+https://mirrors.aliyun.com/crates.io-index/"
```
``` config [清华大学镜像]
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "sparse+https://mirrors.tuna.tsinghua.edu.cn/crates.io-index/"
```
``` config [中科大学镜像]
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "sparse+https://mirrors.ustc.edu.cn/crates.io-index/"
```
:::