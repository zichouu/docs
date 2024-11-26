# Go

## goproxy 镜像
```
go env -w GO111MODULE=on
```
```
go env -w GOPROXY=https://goproxy.cn,direct
```

## 数据类型
| name | min | max | 
| --- | --- | --- |
| uint8 | 0 | 255 |
| int8 | -128 | 127 |
| uint16 | 0 | 65535 |
| int16 | -32768 | 32767 |
| uint32 | 0 | 4294967295 |
| int32 | -2147483648 | 2147483647 |
| uint64 | 0 | 18446744073709551615 |
| int64 | -9223372036854775808 | 9223372036854775807 |
| | | |
| float32 | IEEE-754 32位浮点型数 | |
| float64 | IEEE-754 64位浮点型数 | |
| complex64 | 32 位实数和虚数 | |
| complex128 | 64 位实数和虚数 | |
