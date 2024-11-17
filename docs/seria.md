# DNF 音乐去除

## 方法
使用 **无声Ogg文件** 替换要去除的音乐文件

## FFmpeg 生成无声Ogg
``` bash
ffmpeg -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 -t 10 -c:a libvorbis output.ogg
```

## 音乐路径
### 赛利亚房间
`music/seria_gate.ogg`
### 角色选择阶段
`music/character_stage.ogg`
### 工会
`music/Guild_agit.ogg`