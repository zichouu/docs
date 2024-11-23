# Git
[官网](https://git-scm.com/downloads)

## 用户配置

### 用户名
``` bash
git config --global user.name "zichou"
```

### 用户邮箱
``` bash
git config --global user.email "1303037989@qq.com"
```

## 分支 branch

### 默认名
``` bash
git config --global init.defaultBranch main
```

### 查看
``` bash
git branch
```

### 新建
``` bash
git branch <branch_name>
```

### 删除 -d
``` bash
git branch -d <branch_name>
```

### 切换 switch
``` bash
git switch <branch_name>
```

### 重命名 -m
``` bash
git branch -m <branch_rename>
```

## reset

### 重置到指定版本
``` bash
git reset <version>
```