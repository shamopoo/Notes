# js实现sleep功能
> 主要实现思路aysnc函数

```javascript
async function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

es6写法
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

## 使用

```javascript
// 每隔一秒输出1到5
async function outputNumber() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000)
  }
}
outputNumber();
```
