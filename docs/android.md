# Mi => LineageOS

## 准备
- [解锁小米手机](https://www.miui.com/unlock)
- [ADB](https://developer.android.com/studio/releases/platform-tools?hl=zh-cn): [Windows版下载](https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn)
- [MIFlash](https://xiaomirom.com/download-xiaomi-flash-tool-miflash/): [MiFlash2020-3-14-0.rar](https://cdn.alsgp0.fds.api.mi-img.com/micomm/MiFlash2020-3-14-0.rar)
- [xiaomirom.com](https://xiaomirom.com/)
- [LineageOS](https://wiki.lineageos.org/devices/)
- [NikGapps](https://sourceforge.net/projects/nikgapps/files/)
- [Magisk](https://github.com/topjohnwu/Magisk/releases) / [Kitsune](https://github.com/HuskyDG/magisk-files)
<!-- - [MT管理器](https://mt2.cn/download/) -->

## 应用
### Root 前置
- [Magisk](https://github.com/topjohnwu/Magisk/releases)
- [Kitsune](https://github.com/HuskyDG/magisk-files)
- [LSPosed](https://github.com/LSPosed/LSPosed/releases)

### Magisk / Xposed 模块
- [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases) root 隐藏
- [Uperf](https://github.com/yc9559/uperf/releases) 性能控制
- 小米推送
    - [MiPushFramework](https://github.com/NihilityT/MiPushFramework/releases)
    - [MiPush](https://github.com/NihilityT/MiPush/releases)
- 哔哩哔哩
    - [BiliRoaming](https://github.com/yujincheng08/BiliRoaming/releases) 漫游
- [Thanox](https://github.com/Tornaco/Thanox/releases) 后台管理

### 高级应用
<!-- - [黑域](https://www.coolapk.com/apk/me.piebridge.brevent) 后台管理 -->
- [雹 Hail](https://github.com/aistra0528/Hail/releases) 软件冻结
- [Termux](https://github.com/termux/termux-app/releases) 终端

### 代理
- [v2rayNG](https://github.com/2dust/v2rayNG/releases) `https://raw.fastgit.org/freefq/free/master/v2`

### 系统
- [BSG](https://www.celsoazevedo.com/files/android/google-camera/dev-bsg/) Google 相机
 
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