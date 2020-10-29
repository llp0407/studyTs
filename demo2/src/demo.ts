/*
 * @Author: Luo Liangping
 * @Date: 2020-10-19 22:25:53
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-20 15:26:39
 */
interface Waiter{
    anjiao:boolean;
    say:()=>{}
}

interface Teacher{
    anjiao:boolean;
    skill:()=>{}
}

function judgeWho(animal:Waiter | Teacher){
    if(animal.anjiao){
        (animal as Teacher).skill
    }else{
        (animal as Waiter).say()
    }
    // animal.say() as Waiter
}

function add(first:string|number,seconde:string|number){
    if(typeof first === "string" || typeof seconde === "string"){
        return `${first}${seconde}`
    }
    return first + seconde
}

// class NumberObj{
//     count:number;

// }