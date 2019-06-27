# JavaScript创建对象的七种方式

## 工厂模式

``` javascript
function createPerson(name, job) {
  var o = new Object()
  o.name = name
  o.job = job
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}
var person1 = createPerson(‘Jiang’, ‘student’)
var person2 = createPerson(‘X’, ‘Doctor’)
```

## 构造函数模式

``` javascript
function Person(name, job) {
  this.name = name
  this.job = job
  this.sayName = function() {
    console.log(this.name)
  }
}
var person1 = new Person(‘Jiang’, ‘student’)
var person2 = new Person(‘X’, ‘Doctor’)
```

## 原型模式

``` javascript
function Person() {
}
Person.prototype.name = ‘Jiang’
Person.prototype.job = ‘student’
Person.prototype.sayName = function() {
  console.log(this.name)
}
Person.prototype = {
  name: ‘jiang’,
  job: ‘student’,
  sayName: function() {
    console.log(this.name)
  }
}

var person1 = new Person()
```

## 组合使用构造函数模式和原型模式

``` javascript
function Person(name) {
  this.name = name
  this.friends = [‘Shelby’, ‘Court’]
}
Person.prototype.sayName = function() {
  console.log(this.name)
}
var person1 = new Person()
var person2 = new Person()
person1.friends.push(‘Van’)
console.log(person1.friends)  //[“Shelby”, “Court”, “Van”]
console.log(person2.friends) // [“Shelby”, “Court”]
console.log(person1.friends === person2.friends) //false
```

## 动态原型模式

``` javascript
function Person(name, job) {
  // 属性
  this.name = name
  this.job = job
  
  // 方法
  if(typeof this.sayName !== ‘function’) {
    Person.prototype.sayName = function() {
       console.log(this.name)
    }
  }
  
}
var person1 = new Person(‘Jiang’, ‘Student’)
person1.sayName()
```

## 寄生构造函数模式

``` javascript
function Person(name, job) {
  var o = new Object()
  o.name = name
  o.job = job
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}
var person1 = new Person(‘Jiang’, ‘student’)
person1.sayName()
```

## 稳妥构造函数模式

``` javascript
function Person(name, job) {
  var o = new Object()
  o.name = name
  o.job = job
  o.sayName = function() {
    console.log(name)
  }
  return o
}
var person1 = Person(‘Jiang’, ‘student’)
person1.sayName()
```