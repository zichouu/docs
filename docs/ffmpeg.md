# FFmpeg

[官网](https://ffmpeg.org/download.html)

## 格式转换
| 命令 | 作用 |
| --- | --- |
| -i input.mkv | 输入文件: input.mkv |
| -c copy | 直接复制视频和音频,无需重新编码,速度快 |
| out.mp4 | 输出文件: out.mp4 |
``` bash
ffmpeg -i input.mkv -c copy out.mp4
```

## 视频裁剪
| 命令 | 作用 |
| --- | --- |
| -ss 00:00:05 | 从原视频的第5秒开始 |
| -t 20 | 输出20秒的视频 |
| -to 00:00:25 | 在原视频的第25秒结束 |

裁剪 `input.mp4` 的第5-25秒的内容, 导出为 `out.mp4`
``` bash
ffmpeg -ss 00:00:05 -t 20 -i input.mp4 -c copy out.mp4
```
``` bash
ffmpeg -ss 00:00:05 -to 00:00:25 -i input.mp4 -c copy out.mp4
```

## 音/视频 编码
| 命令 | 值 | 作用 |
| --- | --- | --- |
| -codecs |  | 显示可用的编解码器 |
| -encoders |  | 显示可用的编码器 |
| -decoders |  | 显示可用的解码器 |
| -vn | | 去除视频 |
| -an | | 去除音频 |
| -c | copy | 复制视频音频 |
| -c:v | copy | 复制视频 |
| -c:a | copy | 复制音频 |
| -c:v | h264<br>hevc<br>av1<br>h264_nvenc<br>hevc_nvenc<br>av1_nvenc<br>h264_amf<br>hevc_amf<br>av1_amf<br>... | 设置视频编码器 |
| -c:a | aac<br>flac<br>... | 设置音频编码器 |
| -b:v | 8000K | 设置视频码率 8000KB/S |
| -b:a | 320K | 设置音频码率 320KB/S |
| -vf | scale=1280:720<br>scale=1920:1080<br>scale=2560:1440<br>scale=3840:2160 | 视频分辨率 |
| -r | 60 | 设置视频帧率 60 |

把 `input.mp4` 的视频流重新编码成 H264 10000KB/S 码率, 使用NVENC显卡加速, 音频流保持不变, 导出为 `out.mp4`
``` bash
ffmpeg -i input.mp4 -c:v h264_nvenc -b:v 10000K -c:a copy out.mp4
```
部分 NVIDIA显卡 使用 `hevc_nvenc` 编码时的默认设置可能会报错 `B frames as references are not supported`

需要添加 `-b_ref_mode 0` 禁用B帧解决
``` bash
ffmpeg -i input.mp4 -c:v hevc_nvenc -b_ref_mode 0 out.mp4
```


## 图片转码

图片质量范围
| 格式 | 命令 | 值 (质量范围) |
| --- | --- | --- |
| PNG | ? | 无损格式应该不用设置 |
| JPG/JEPG | -q | 2 > 31 |
| WEBP | -q | 0 < 100 |
| AVIF | -crf | 0 > 63 |

把 `input.jpg` 转换成50质量的 `out.webp`
``` bash
ffmpeg -i input.jpg -q 50 out.webp
```

把 `input.webp` 转换成30质量的 `out.avif`
``` bash
ffmpeg -i input.webp -crf 30 out.avif
```