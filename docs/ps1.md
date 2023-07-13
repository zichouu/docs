# PowerShell 配置

## 执行策略
[链接](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies)

允许脚本执行
``` ps1
Set-ExecutionPolicy RemoteSigned
```

## 关闭/开启 IPV6 脚本
::: warning 注意
以管理员身份运行, 如有中文需要修改编码保存
`ANSI` `GB2312` `GBK` `GB18030`
:::

::: code-group
```ps1 [关闭]
powershell Disable-NetAdapterBinding -Name "以太网" -ComponentID ms_tcpip6
powershell Disable-NetAdapterBinding -Name "WLAN" -ComponentID ms_tcpip6
```
```ps1 [开启]
powershell Enable-NetAdapterBinding -Name "以太网" -ComponentID ms_tcpip6
powershell Enable-NetAdapterBinding -Name "WLAN" -ComponentID ms_tcpip6
```
:::

### *视频*
<iframe src="//player.bilibili.com/player.html?aid=478649985&bvid=BV1sT411Z7yG&cid=990580451&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="430px"> </iframe>