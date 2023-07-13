# Minecraft 服务端配置

## JVM 参数

[链接](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/)

::: code-group
``` bash [使用内存 &lt 12G]
java -Xms3G -Xmx3G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX :G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:Survivor-XX:Ratio=32 PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paperclip.jar nogui
```
``` bash [12G &lt 使用内存]
java -Xms13G -Xmx13G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=40 -XX:G1MaxNewSizePercent=50 -XX :G1HeapRegionSize=16M -XX:G1ReservePercent=15 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=20 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:Survivor-XX:Ratio=32 PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paperclip.jar nogui
```
:::

## server.properties

[Wiki](https://minecraft.fandom.com/zh/wiki/Server.properties)

### *pvp*
是否允许PvP

- `true` 玩家可以互相残杀 (默认值)
- `false` 玩家无法互相造成伤害

### *difficulty*
难度设置

- `peaceful` 和平
- `easy` 简单 (默认值)
- `normal` 普通
- `hard` 困难 ([僵尸村民](https://minecraft.fandom.com/zh/wiki/僵尸村民) 转换率 100%)

### *online-mode*
是否让服务器对比Minecraft账户数据库验证登录信息

- `true` 正版服务器: 使用正版帐号来验证登录信息
- `false` 离线服务器: 每个离线用户名对应一个离线帐号. 更改离线用户名即更改离线账户, 就会无法读取之前的存档.
::: warning 离线服务器
需要 [密码插件](https://github.com/AuthMe/AuthMeReloaded/releases) 来验证登录信息, 因为别人能更改离线用户名来随意使用你离线账户的存档
:::

### *view-distance*
设置服务器端的可视距离

默认值 `10`

### *entity-broadcast-range-percentage*
此选项控制实体需要距离玩家有多近才会将数据包发送给客户端

这个值是以默认值的百分比来表示的。例如：将此值设为50，表示将渲染正常情况下一半距离以内的生物

默认值 `100` 可能会有个问题: [恶魂](https://minecraft.fandom.com/zh/wiki/恶魂) 正在向你发射火球, 但你看不到恶魂, 只能听到声音和看到火球. 可以适当提高此值来解决此问题

## gamerule

[Wiki](https://minecraft.fandom.com/zh/wiki/游戏规则)

::: warning 注意
一些服务端的 gamerule 命令只能更改主世界规则, 需要 OP 在游戏内进入各个世界 (主世界, 下界, 末地) 后再进行设置
:::

### keepInventory
- `true` 玩家死亡后 **保留** 物品和经验
- `false` 玩家死亡后 **掉落** 物品和经验