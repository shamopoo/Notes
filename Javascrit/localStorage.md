# 模拟 localStorage 时如何实现过期时间功能

``` javascript
const localStorageMock = (function() {
  let store = {}
  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value, time) {
      time = Number(time) ? time : 0
      store[key] = value.toString()
      time > 0 && this.timeOut(key, time)
    },
    removeItem: function (key) {
      store[key] = null
    },
    timeOut: function (key, time) {
      let that = this
      let timer = setTimeout(function(){
        that.removeItem(key)
        clearTimeout(timer)
      }, time)
    },
    clear:  function(){
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage2', {
			value: localStorageMock
})
```