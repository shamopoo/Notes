# 前端技巧

## 已知年月，求该月共多少天

https://github.com/yanwen/Browser-icons/tree/master/icns

``` javascript
function getMonthCountDay (year, month) {
  return 32 - new Date(year, month, 32).getDate()
}
// or
function getMonthCountDay (year, month) {
  return new Date(year, month, 0).getDate()
}
```
