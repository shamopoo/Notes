# Linux常用命令

## 基本命令

> Linux 命令语法
>
> 命令格式： 命令 【-选项】【参数】

### 1. ls

> 列出目录内容

- 扩充： list
- 选项：
  - -l：  详细信息显示
  - -a：显示所有文件，包括隐藏文件
  - -h:   将文件容量以易读的方式显示
  - -d:   仅显示目录名，而不显示目录下的内容列表

```kotlin
ls // 列出当前目录
/Users/Notes
ls -a // 显示所有文件，包括隐藏文件
.DS_Store  Book   Linux
```

###  2.  cd

> 切换目录

- 扩充： change directory

```kotlin
cd .. // 返回到上级目录
cd - // 返回进入此目录之前的目录
```

### 3. pwd

> 打印当前工作目录名

- 扩充： print working directory

```kotlin
pwd
/Users/shamopoo/Documents/xu/Notes
```

### 4. rm

> 删除文件或者目录

- 扩充： remove dirctories
- 常用选项：
  - -f:  force的缩写，忽略不存在的文件，不会出现警告信息。
  - -i：互动模式，在删除前会询问用户是否操作。
  - -r:  指示rm将参数中列出的全部目录和子目录均递归地删除

```kotlin
rm -rf Notes // 删除文件notes
```

### 5. mv

> 移动和重命名文件

- 扩充： move
- 常用选项：
  - -f:   force的缩写，如果目标文件已经存在，不会询问而直接覆盖
  - -i：若目标文件已经存在，就会询问是否覆盖
  - -u:  若目标文件已经存在，且比目标文件新，才会更新

```kotlin
mv file dir // 把文件file移动到dir目录
mv file file2 // 把文件file重命名为file2
```

### 6. mkdir

> 创建目录

- 扩充： make directories

```kotlin
mkdir notes // 创建文件夹notes在当前目录
```

### 7. cat

> 查看文件内容

```kotlin
cat ~/.ssh/id_rsa.pub // 查看ssh
ssh-rsa AAAAB3Nkm2ds
```

### 8. cp

> 复制文件或者目录

- 扩充： copy

- 常用选项：

  - -r:   复制目录
  - -p:  保留文件属性

  ```kotlin
  cp /root/id_rsa.pub /Users/rsa.pub 
  //root目录下的id_rsa.pub文件复制到Users目录下,并且改名为rsa.pub
  ```



