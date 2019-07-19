```javascript
   const person = {
      name: 'menglinghua',
      say: function (){
        return function (){ // () =>
          console.log(this.name);
        };
      }
    };
    person.say()(); // undefined   改成箭头函数=>menglinghua
```

```javascript
    let arr = [3]
    let a = arr.reduce(Math.pow, 2)
    console.log(a) // 8
```

```javascript
    // 正则去首尾空格
    let str = ' ab '
    console.log( str.replace(/^\s*|\s*$/g, ''))
```

```javascript
    // 数组展平
    let Arr = [1, 3, 5 ,[3, 5,4],4,[1,[3,5]]]
    function flattenArr (arr) {
       return arr.toString().split(',')
    }
    function  flattenArrEs (arr) {
       return  arr.reduce((a, v) =>  [].concat(...arr.map(x => Array.isArray(x)  ?  flattenArrEs(x)  :  x)))
    }
    console.log(flattenArrEs(Arr))
```

```javascript
    // 获取地址的参数并转成对象

    function  getURLParameters(url)  {
      return (url.match(/([^?=&]+)(=[^&]*)/g) || []).reduce((a, v) => 
      ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})
    }
    console.log(getURLParameters('www.shamopoo.top?name=shamoppoo&sex=1&age=3'))
```


何时发生重排？
1.   添加或者删除可见的dom
2.  元素的位置改变
3.  元素的尺寸改变
4.  元素的内容改变
5.  页面渲染初始化
6.  浏览器窗口尺寸改变

```javascript
  // 没三位加,
  //  适用于有或者没有小数的数字
  function numAddComma (num) {
        return num.toLocalString()
  }
  // 适用于无小数的数字
  function numberAddComma (num) {
        return num.replace(/(\d)(?=(?:\d{3})+$)/g,  '$1,')
  }
```

``` javascript
  var number = 50
  var obj  = {
      number: 60,
      getNum: function () {
         var number = 50
         return this.number
      }
  }
  console.log(obj.getNum())  // 60
  console.log(obj.getNum.call()) // 50
  console.log(obj.getNum.call({number: 20})) // 20
```


``` javascript
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]
  users.find(o => o.age > 30) // barney

```



``` javascript
   // 数组展平
   function flattenDeep (arr) {
      return Array.isArray(arr) 
                  ? arr.reduce((a, c) => a.concat(flattenDeep(c) ), [])
                  : [arr]
   }
  console.log(flattenDeep([1, [[2], [3, [4]], 5]]))
```


``` javascript

    //  数组转对象
    //const fromPairs = arr => arr.reduce((a, c) => (a[c[0]] = c[1] , a), {})
    const fromPairs = function (arr) {
        return arr.reduce((a,c) => {
            a[c[0]] = c[1]
            return a
          }, {})
    }
    console.log(fromPairs([['a', 1], ['b', 2]]))
```

``` javascript
    //const grouped =  ['one', 'two', 'three'].reduce( (a,c) => ((a[v.length] || (a[v.length] = [])).push(c), a),  {}) 
    const grouped = function (arr) {
        return  arr.reduce((a, v) => {
            (a[v.length] || (a[v.length] = [])).push(v)
            return a
        }, {})
    }
    console.log(grouped(['one', 'two', 'three']))
    // output: {3: ["one", "two"], 5: ["three"]}
```


``` javascript
    // bind
    Function.prototype.bind = function(t) {
        var args = Array.prototype.slice(arguments, 1),
              self = this
              return function () {
                    return self.call(t, args.concat(Array.prototype.slice(arguments)))
              }
    }
```


``` javascript
    // trim 
    function trim (str) {
      return str.replace(/(^\s*)|(\s*$)/g, '')
    }
    // /s 表示空格

    // * 这个代表重复0次或者更多次

    // +这个代表重复1次或者更多次

    // ?这个代表重复0次或者1次
    console.log(trim('     a b c    '))
    // output: 'abc' 
```
``` javascript
  // 1. js运算符优先级表
  // 2. 2018大厂高级前端面试题汇总解答

    var obj = {
       say: function () {
            function _say () {
              console.log(this)       // window
            }   
            console.log(obj)          // undefind
            return _say.bind(obj)    // obj 相当于null 默认绑定window
       }()
     }
     obj.say()
```

``` javascript
     var str = 'abcexyzab12345abggabc'
     // 去掉abc
     console.log(str.replace(/[abc]/g, ''))

     // 给数字加上[1][2][3][4][5]
     console.log(str.replace(/\d/g, '[$&]'))

     // 数字乘以2
     console.log(str.split('').map(v => {
       return /\d$/.test(v) ? v * 2 : v
     }).join(''))
```

``` javascript
     // 
     var x = 5, 
          y = 'abc'
      function outFun () {
        var x =  10,
              y   =  'xyz'
        function innerFun () {
              x = 20
              var y = 'faasd'
        }      
        innerFun()
        console.log(x)
        console.log(y)
      }    
      outFun() //  20 xyz
      console.log(x) // 5
      console.log(y) // abc
```

``` javascript
    // this引用的是函数执行的环境对象
    var num = 1;
    var myObject = {
        num: 2,
        add: function() {
            this.num = 3;
            (function() {
                // 立即执行函数和闭包的this指向windows
                console.log(this.num);
                this.num = 4;
            })();
            console.log(this.num);
        },
        sub: function() {
            console.log(this.num)
        }
    }
    //  闭包的this指向window
    myObject.add(); // 3 1
    console.log(myObject.num); // 3
    console.log(num); // 4
    // 赋值后 sub 的this指向Windows
    var sub = myObject.sub;
    sub.call(); // 4

```


``` javascript
    //  1
    var z = 10
    function foo () {
        console.log(z)
    }
    (function (funArg) {
        var z = 20
        funArg()
    })(foo)

    // input: 10  变量定义时已经决定了其作用域
```

``` javascript
    // 2 原型链
    Object.prototype.a = 'a'
    Function.prototype.a = 'a1'
    //person.prototype.a = 'a2'
    function person () {}
    var peter = new person()
    console.log(peter.a) // 'a'
    // peter =>   peter.prototype => Object.prototype
    var foo = {},
    F = function(){};
    Object.prototype.a = 'value a';
    Function.prototype.b = 'value b';

    console.log(foo.a)   // a
    console.log(foo.b)     // underfind
    console.log(F.a)      // a
    console.log(F.b)  // b
```    
    
``` javascript
    var y = 10,
          foo2
    (function() {
        var y = 20
        foo2 = function () {
            console.log(y)
        }
    })()      
    foo2() //  20
```



``` javascript
   // 手写bind
    Function.prototype.bindNew () = function (fn) {
        var self = this,
              arg1 = Array.prototype.slice.call(arguments, 1)
            return function () {
                var agr2 = Array.prototype.slice.call(arguments),
                      args = arg1.concat(arg2)
                      return  self.apply(fn, args)
            }  
    }
```
```javascript
function cameLizer (str) {
    return str
                .split('-')
                .map((v, i) => i === 0 ? v : v[0].toUpperCase() +  v.slice(1))
                .join('')
}
console.log(cameLizer('my-short-thing'))
```

