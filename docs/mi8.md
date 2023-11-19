# 我的 MI8 刷机流程 LineageOS

## 准备
- [ADB](https://developer.android.com/studio/releases/platform-tools?hl=zh-cn): [Windows版下载](https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn)
- [MIFlash](https://xiaomirom.com/download-xiaomi-flash-tool-miflash/): [MiFlash2020-3-14-0.rar](https://cdn.alsgp0.fds.api.mi-img.com/micomm/MiFlash2020-3-14-0.rar)
- [xiaomirom.com](https://xiaomirom.com/series/dipper/): [dipper_images_V12.5.2.0.QEACNXM_20211028.0000.00_10.0_cn](https://3phne1irpolds88ngjm54cng3neoapmlpjabf8rm1ul6nnugqlsvu7v6.qc.dolfincdnx.net:10443/xdispatch7416aadc7700532a/bigota.d.miui.com/V12.5.2.0.QEACNXM/dipper_images_V12.5.2.0.QEACNXM_20211028.0000.00_10.0_cn_f4ae6b9441.tgz?bsreqid=5d78e17f586f4b05b4beef0807fbefd4&bsxdisp=se)
- [LineageOS](https://download.lineageos.org/devices/dipper/builds)
- ~~[OpenGApps](https://opengapps.org/): [open_gapps-arm64-10.0-pico-20200705.zip](https://sourceforge.net/projects/opengapps/files/arm64/20200705/open_gapps-arm64-10.0-pico-20200705.zip/download)~~
- [NikGapps](https://sourceforge.net/projects/nikgapps/files/)
- ~~[TWRP](https://dl.twrp.me/dipper/)~~
- [Magisk](https://github.com/topjohnwu/Magisk/releases)
<!-- - [MT管理器](https://mt2.cn/download/) -->

## 流程
1. 使用 MIFlash 刷入官方线刷包
2. [安装 LineageOS](https://wiki.lineageos.org/devices/dipper/install)
    1. 刷入 LineageOS Recovery `fastboot flash recovery recovery.img`
    2. 进入 Recovery 格式化分区 `Format data / factory reset`
    3. 刷入 LineageOS `adb sideload lineage.zip`
    4. 刷入 `GApps` `Magisk` (可选)

## 应用
### Root 前置
- [Magisk](https://github.com/topjohnwu/Magisk/releases)
- [LSPosed](https://github.com/LSPosed/LSPosed/releases)

### Magisk / Xposed 模块
- [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases) root 隐藏
- [Uperf](https://github.com/yc9559/uperf/releases) 性能控制
- 小米推送
    - [MiPushFramework](https://github.com/NihilityT/MiPushFramework/releases)
    - [MiPush](https://github.com/NihilityT/MiPush/releases)
- 哔哩哔哩
    - [BiliRoaming](https://github.com/yujincheng08/BiliRoaming/releases) 漫游
    - [com.weixiao.bz](https://cowtransfer.com/s/8276980ebe8241) 会员画质
- [Thanox](https://github.com/Tornaco/Thanox/releases) 后台管理

### 高级应用
<!-- - [黑域](https://www.coolapk.com/apk/me.piebridge.brevent) 后台管理 -->
- [雹 Hail](https://github.com/aistra0528/Hail/releases) 软件冻结
- [Termux](https://github.com/termux/termux-app/releases) 终端

### 代理
- [v2rayNG](https://github.com/2dust/v2rayNG/releases) `https://raw.fastgit.org/freefq/free/master/v2`

### 系统
- [BSG](https://www.celsoazevedo.com/files/android/google-camera/dev-bsg/) Google 相机

## 腾出 System 分区空间安装 GApps (官方系统)
::: warning 注意
删除需要 Root System 权限
:::
MIUI V12.5.2.0
- `/system/app/SogouInput` 搜狗输入法 31M
- `/system/priv-app/Browser` 小米浏览器 84M
- `/system/priv-app/MiuiVideo` 小米视频 84M
- `/system/priv-app/Music` 小米音乐 31M

 
## USB3.0 接口问题修复
::: code-group
``` reg [修复]
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100]
"osvc"=hex:00,00
"SkipContainerIdQuery"=hex:01,00,00,00
"SkipBOSDescriptorQuery"=hex:01,00,00,00
```
``` reg [复原]
Windows Registry Editor Version 5.00

[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100]
```
:::

## NTP
::: code-group
``` bash [删除]
adb shell settings delete global captive_portal_https_url
adb shell settings delete global captive_portal_http_url
```
``` bash [添加]
adb shell settings put global captive_portal_https_url https://connect.rom.miui.com/generate_204
adb shell settings put global captive_portal_http_url http://connect.rom.miui.com/generate_204
```
:::