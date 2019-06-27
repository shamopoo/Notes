js实现new

``` javascript
function create () {
  // 创建一个对象
  var obj = new Object()
  // 取出函数
  var fn = Array.prototype.shift.call(arguments)
  //  链接原型
  obj.__proto__ = fn.prototype
  // 绑定this
  let result = fn.call(obj, arguments)
  // 确定返回对象
  return typeof result === 'object' ? result : obj
}
var foo = create(foo2)
```