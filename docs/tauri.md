# TAURI 配置
[官网](https://tauri.app/zh-cn/)

[Rust](https://www.rust-lang.org/zh-CN/)

## tauri.conf.json

### [*Windows 安装程序语言*](https://tauri.app/zh-cn/v1/guides/building/windows#internationalization)
::: code-group
``` json [单语言] {6}
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "language": "zh-CN"
        }
      }
    }
  }
}
```
``` json [多语言] {6}
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "language": ["zh-CN", "en-US"]
        }
      }
    }
  }
}
```
:::

### [Windows Webview2 安装模式](https://tauri.app/zh-cn/v1/guides/building/windows#webview2-installation-options)
::: code-group
``` json [默认] {6}
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "downloadBootstrapper"
        }
      }
    }
  }
}
```
``` json [Windows 7 兼容] {6}
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "embedBootstrapper"
        }
      }
    }
  }
}
```
``` json [嵌入] {6}
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "offlineInstaller"
        }
      }
    }
  }
}
```
:::