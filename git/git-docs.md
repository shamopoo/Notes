# GIT 指令速查表

## 解决冲突

```
$ git pull —rebase    // commit 后
$ git rebase —continue // add后commit前
```

## 创建

### 复制一个已建的仓库

```
$ git clone ssh://use@xxx.com/repo.git
```

### 创建一个新的本地仓库

```
$ git init
``` 

## 本地修改

### 显示工作路径下全部修改的文件

```
$ git status
```

### 显示与上次提交版本文件的不同

```
$ git diff
```

### 把当前所有修改添加到下次提交中

```
$ git add .
```

### 制定某个文件的修改添加到下次提交中

```
$ git add -p <file>
```

### 提交本地的所有修改

```
$ git commit -a
```

### 提交之前已经标记的变化

```
$ git commit
```

### 提交之前已标记的变化

```
$ git commit
```

## 提交历史
   
### 从最新提交开始显示所有的提交记录
```
$ git log
```

### 显示制定文件的所有文件

```
 $ git log -p <file>
 ```

### 谁，在什么时间，修改了文件的什么内容

```
$ git blame  <file>
```

## 分支与标签
### 显示所有分支

```
 $ git branch -a
 ```
 
### 切换当前分支

```
$ git checkout <branch>
```

### 创建新分支基于当前分支

```
$ git branch  <new branch>
```
 
### 创建新的可追溯的分支基于远程分支
```
$ git checkout  —track  <remote/branch>
```
### 删除本地分支
```
$ git branch -d <branch>
```

### 给当前的提交打标签
```
$ git tag <tag-name>
```

## 更新与分布
### 列出当前配置的远程端
```
$ git remote -v
```
### 显示远程端信息

```
$ git remote show <remote>
```
### 添加新的远程端

```
$ git remote add <shortname> <url>
```

### 下载远程端的所有改动到本地 不会自动到当前

```
$ git fetch  <remote>
```
    
### 下载远程的所有改动到本地 自动合并到当前

```
$ git  pull <remote><branch>
```

### 将本地版本发布到远程端

```
$ git push <remote><branch>
```

### 删除远程分支

```
$ git branch -dr  <branch/ remomte>
```

### 发布标签

```
$ git push  —tags
```

## 合并与重置
### 将分支合并到当前

```
$ git merge <branch>
```

### 将当前版本重置到分支中请勿重置已发布的提交

```
$ git rebase <branch>
```

### 退出重置

```
$ git  rebase —abort
```

### 解决冲突后继续重置

```
$ git rebase  —contine
```
 
### 使用配置好的合并工具去解决冲突

```
$ git mergetool
```

### 在编辑中手动解决冲突后 标记文件为已解决冲突

```
$ git add <resolved-file>
$ git rm <resole-file>
```

## 撤销
### 放弃工作目录的所有修改

```
$ git reset   —hard HEAD
```

### 放弃某个文件的所有本地修改

```
$ git checkout HEAD  <file>
```

### 重置一个提交 (通过创建一个截然不同的新提交)

```     
$ git rever <commit> 
```  

### 将HEAD重置到上一次的提交的版本 并抛弃改版本之后的所有修改

```
$ git reset —hard <commit>
 ```
 

 ### 将HEAD重置到上一次的提交的版本 并将之后修改标记为未添加到缓存区的修改
 
 ```
 $ git reset <commit>
```  
### 将HEAD重置到上一次的提交的版本 并保留未提交的本地修改
  
```  
$git reset —keep <commit>
```
    
        
     
     

 
   

  
