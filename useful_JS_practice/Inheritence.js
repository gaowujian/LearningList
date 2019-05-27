//构造函数的问题(执行相同任务的两个function是两个不同实例)
// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = new Function("console.log(this.name)")
// }
// let person1 = new Person("tony",25,"developer")
// let person2 = new Person("jingjing",25,'HR')
// console.log(person1.sayName == person2.sayName)



//解决办法：将sayName放在构造函数外，但是新问题是sayName只会给Person用，然而它是一个全局函数，有点名不副实
// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = sayName;
// }

// function sayName(){
//     console.log(this.name)
// }

// let person1 = new Person("tony",25,"developer")
// let person2 = new Person("jingjing",25,'HR')
// console.log(person1.sayName == person2.sayName)



// 使用原型模式
function Person(){
}
Person.prototype.name = "Nicholas"
Person.prototype.age = 29
Person.prototype.job = "Engineer"
Person.prototype.sayName = function(){
    console.log(this.name)
}

let person1 = new Person()
let person2 = new Person()
person1.sayName()
person2.sayName()
console.log(person1.sayName == person2.sayName)


//检测用代码，分别common上边的三段代码检测结果，注意不建议使用name属性，因为构造函数有name属性，name是构造函数的名字，和我们想要的名字不一样，所以建议使用age和job，但是这里就不再修改了

console.log(person1.hasOwnProperty('name'))
console.log(Person.hasOwnProperty('name'))
console.log(Person.prototype.hasOwnProperty('name'))

console.log(Object.getOwnPropertyNames(person1))
console.log(Object.getOwnPropertyNames(Person))
console.log(Object.getOwnPropertyNames(Person.prototype))

console.log(Object.keys(person1))
console.log(Object.keys(Person))
console.log(Object.keys(Person.prototype))




