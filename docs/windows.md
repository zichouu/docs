# Windows 系统设置

## 前言
我新装系统后的必要设置, 备忘

## 0. 装前细节
 - 提前准备好驱动的新版安装包(特别是显卡和网卡), 系统初始化时全程断网即可避免Windows自动安装旧版驱动(断网也能加快初始化速度, 避免因网络造成的影响), 驱动安装完成后再恢复网络.

## 1. 关闭鼠标精准
![](assets/wd/sbjz.png)

## 2. 关闭 Defender
关闭 `Windows Defender`

![](assets/wd/defender.png)

## 3. 关闭 UAC 提示
![](assets/wd/uac.png)

## 4. 关闭防火墙
![](assets/wd/fhq.png)

## 5. 关闭驱动器优化计划
![](assets/wd/qdqyh.png)

## 6. 关闭粘滞快捷键
![](assets/wd/s5.png)

## 7. 关闭传递优化
![](assets/wd/cdyh.png)

## 8. 关闭窗口最小化鼠标手势
:::tip 提示
新版系统默认关闭, 旧版在组策略关闭.
:::

![](assets/wd/shake.png)

## 9. 关闭 Store 自动更新
:::tip 提示
LTSC版本添加Store的方法: [Github](https://github.com/kkkgo/LTSC-Add-MicrosoftStore)
:::

![](assets/wd/store.png)

## 10. 资源管理器设置 (Explorer)
 - 开启 `文件扩展名` `隐藏的项目`

 ![](assets/wd/kz.png)

 - 文件夹选项

 ![](assets/wd/wjj.png)

## 11. 性能选项
关闭一些过度动画, 效率至上

![](assets/wd/xn.png)

## 12. 电源选项
 - 设置 `卓越性能` / `高性能`

 ![](assets/wd/zhuoyue.png)

 - 关闭 `快速启动`, 设置 `不采取任何操作` 避免误关机
 
 ![](assets/wd/dyan.png)

## 13. 关闭 MsMpEng.exe
### 名称
Antimalware Service Executable

### 目录
Windows 10: `C:\Program Files\Windows Defender`

Windows 11: `C:\ProgramData(隐藏)\Microsoft\Windows Defender\Platform`

### 方法
在不启动系统的情况下 (使用另一个系统), 修改目录名字让其找不到文件.

## 脚本

[蓝奏云](https://wwe.lanzoui.com/ij9100pdbbde)
(关闭 Defender,自动更新,遥测,OneDrive,SysMain,WSearch)