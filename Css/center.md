# CSS水平垂直居中

## 一
``` css
#container{
    position:relative;
}
#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
```


## 一
``` javascript
#container{
    position:relative;
}
#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
```



## 二
``` css
#container{
    position:relative;
}
#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    margin:-50px 0 0 -50px;
}
```


## 三
``` css
#container{
    position:relative;
}
#center{
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
```

## 四
``` css
#container{
    display:flex;
    justify-content:center;
    align-items: center;
}
```
