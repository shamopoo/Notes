# 大数相加
> 如何实现两个非常大的数字(已经超出了Number范围)的加法运算。

``` javascript
function bigNumberSum (A, B) {
  let a = A + ''
  let b = B + ''
  let count = 0
  // 转化为相同位数的字符串
  while (count < a.length || count < b.length) {
    if (!a[count]) {
      a = '0' + a
    } else if (!b[count])  {
      b = '0' + b
    }
    count++
  }
  const result = []
  let cur = 0
  for (let i = a.length - 1; i > -1; i--) {
    let sum = cur + Number(a[i]) + Number(b[i])
    cur = sum > 9 ? 1 : 0
    result[i] = sum % 10
  }
  cur === 1 && result.unshift(1)
  return result.join('')
}
```