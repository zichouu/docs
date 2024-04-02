# PowerShell 配置

## 执行策略
[链接](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies)

允许脚本执行
``` ps1
Set-ExecutionPolicy RemoteSigned
```

## 关闭/开启 IPV6 脚本

::: warning 注意
保存为脚本文件时, 如有中文需要修改编码保存
`ANSI` `GB2312` `GBK` `GB18030`
以管理员身份运行
:::

::: code-group
```ps1 [查看名称]
Get-NetAdapterBinding -ComponentID ms_tcpip6
```
```ps1 [关闭]
Disable-NetAdapterBinding -Name "以太网" -ComponentID ms_tcpip6
```
```ps1 [开启]
Enable-NetAdapterBinding -Name "以太网" -ComponentID ms_tcpip6
```
:::

::: details 视频
<iframe src="//player.bilibili.com/player.html?aid=478649985&bvid=BV1sT411Z7yG&cid=990580451&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="368px"> </iframe>
:::

## 更改网络类型 (专用/公用)

::: code-group
```ps1 [查看名称]
Get-NetConnectionProfile
```
```ps1 [专用]
Set-NetConnectionProfile -Name "网络" -NetworkCategory Private
```
```ps1 [公用]
Set-NetConnectionProfile -Name "网络" -NetworkCategory Public
```
:::
