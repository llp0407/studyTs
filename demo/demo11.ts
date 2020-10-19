/*
 * @Author: Luo Liangping
 * @Date: 2020-10-16 17:46:19
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-19 21:28:50
 */

class Person {
    public name:string;
    constructor(p:P){
        this.name = p.name
    }
}

class Teacher extends Person {
    constructor(public age:number) {
        super(obj)
    }
}

interface P {
    name:string,
    age:number
}

let obj:P = {
    name:'llp',
    age:18
}

const person = new Person(obj)
console.log(person.name)

const teacher = new Teacher(18)
console.log(teacher.age)
