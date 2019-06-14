# vim常用命令

- <code>q</code>   退出 带有！表示强制
- <code>w</code>   保存
- <code>i</code>   在游标位置进入编辑模式
- <code>A</code>   在游标位置后面进入编辑模式
- <code>ESC</code> 退出编辑模式
- <code>/String</code> 搜索
- <code>/\cString</code> 搜索不区分大小写
- <code>n</code>   继续下一个搜寻结果
- <code>N</code>   继续上一个搜寻结果
- <code>i</code>   在当前光标位置前面输入
- <code>a</code>   在当前光标位置后面输入
- <code>o</code>   在当前光标下一行新建一行 输入内容
- <code>I</code>   行首
- <code>A</code>   行尾
- <code>O</code>   上一行新建一行
- <code>h</code>   向左移动
- <code>l</code>   向右移动
- <code>j</code>   向下移动
- <code>k</code>   向上移动 
- <code>8l</code>  向右移动8个字符
- <code>w</code>   移到下一个单词的词首
- <code>e</code>   移到当前或者下一个单词的词尾
- <code>b</code>   移到当前或者前一个单词的词尾
- <code>3w</code>  向后跳3个单词
- <code>dd</code>  删除当前光标所在行
- <code>u</code>   撤销前一次操作 连续使用


```javascript
// vim /etc/vimrc 在最后加入
" 展示列号
set number
" 语法高亮
syntax on
" 标记搜索到的字符串
set hlsearch
" 自动缩排
set autoindent
" 展示说明
set ruler
" 展示编辑状态
set showmode
" 设置注释的颜色
highlight Comment ctermfg=cyan
" 设定搜索到的字符串的颜色
highlight Search term=reverse ctermbg=4 ctermfg=7
" 设定 tab 键的字元数
set tabstop=4
```

