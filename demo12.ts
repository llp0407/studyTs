/*
 * @Author: Luo Liangping
 * @Date: 2020-10-16 18:32:24
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-19 21:30:18
 */
class Girl {
    constructor(protected _age:number){
        
    }
    get age(){
        return this._age - 10
    }
    set age(age:number){
        this._age = age
    }
}

const dajiao = new Girl(28)
dajiao.age = 25
console.log(dajiao.age)
