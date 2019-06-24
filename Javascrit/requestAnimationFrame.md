#使用js实现一个持续的动画效果

``` javascript
//兼容性处理
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
})();
var e = document.getElementById("e");
var flag = true;
var left = 0;
function render() {
    left == 0 ? flag = true : left == 100 ? flag = false : '';
    flag ? e.style.left = ` ${left++}px` :
        e.style.left = ` ${left--}px`;
}
(function animloop() {
    render();
    requestAnimFrame(animloop);
})();
```