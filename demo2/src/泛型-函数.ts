/*
 * @Author: Luo Liangping
 * @Date: 2020-10-20 15:59:50
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-20 16:20:23
 */


function join<T,P>(first:T,second:P){
    return `${first}${second}`
}

let res = join(1,'2')

console.log(res)

// 泛型数组
function myFun<ANY>(params:ANY[]){
    return params
}

myFun<string>(["123","456"])