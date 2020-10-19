/*
 * @Author: Luo Liangping
 * @Date: 2020-10-13 14:56:05
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-13 15:40:21
 */

function sayHello(): void {
    console.log('Hellp World')
}

function errorFunction(): never {
    throw new Error()
    console.log('Hello World')
}

function forNever():never{
    while(true){

    }
    console.log('Hello World')
}

function add({one,two}:{one:number,two:number}){
    return one + two
}

const total = add({one:1,two:2})