# 节流和防抖
 
### debounce防抖
``` javascript
    function debounce (fn, delay) {
        var self = this,
              args = arguments
              return function () {
                    clearTimeout(fn.id)
                    fn.id = setTimeout( function () {
                        fn.call(self, args)
                    }, dealy || 500)
              }
    }
```

### throttle 节流
``` javascript
    function throttle (fn, delay) {
        var slef = this,
              timer = null,
              args = arguments;
              isImmediately = true
              if (isImmediately) {
                  fn.call(slef, args)
                  isImmediately = false
              }
              if (timer) {clearTimeout(timer)}
              timer = setTimeout(function () {
                  timer = null
                  fn.call(self, args)
              }, delay || 500)
    }

```
