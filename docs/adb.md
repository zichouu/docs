# [adb](https://developer.android.com/studio/releases/platform-tools)
[直链 (Windows)](https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn)

## reboot
| 命令 | 作用 |
| --- | --- |
| adb reboot fastboot | 重启至 fastboot |
| adb reboot recovery | 重启至 recovery |

## fastboot
| 命令 | 作用 |
| --- | --- |
| fastboot flash recovery twrp.img | 向 recovery 分区刷入 twrp.img 文件 |

## push pull
| 命令 | 作用 |
| --- | --- |
| adb push <文件> <手机目录> | 向手机传入文件 |
| adb pull <手机文件> | 拉取手机文件 |

## install
| 命令 | 作用 |
| --- | --- |
| adb install bili.apk | 安装 bili.apk |
| adb uninstall com.tencent.mm | 卸载 微信 (应用包名: com.tencent.mm) |

## connect
| 命令 | 作用 |
| --- | --- |
| adb tcpip 5555 | 设置目标设备以监听端口 5555 上的 TCP/IP 连接 |
| adb connect 192.168.1.2:5555 | 连接到 192.168.1.2:5555 |

## 其他
| 命令 | 作用 |
| --- | --- |
| adb shell | 打开 Shell (exit 退出) |
| adb kill-server | 关闭 adb |
