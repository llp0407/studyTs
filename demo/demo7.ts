// /*
//  * @Author: Luo Liangping
//  * @Date: 2020-10-16 16:50:24
//  * @LastEditors: Luo Liangping
//  * @LastEditTime: 2020-10-16 17:09:52
//  */
// interface Girl {
//     name:string,
//     age:number,
//     bust:number,
//     waistline?:number,
// }

// const screenResume = (girl:Girl)=>{
//     girl.age < 24 && girl.bust >=90 && console.log(girl.name+'进入面试')
//     girl.age >= 24 || girl.bust <90 && console.log(girl.name+'你被淘汰')
// }

// const getResume = (girl:Girl)=>{
//     console.log(girl.name + '年龄是' + girl.age)
//     console.log(girl.name + 'bust是' + girl.bust)
//     console.log(girl?.waistline)
//     girl?.waistline && console.log(girl.name + 'waisline是' + girl.waistline)
// }

// let girl:Girl = {
//     name:'大脚',
//     age:18,
//     bust:94,
//     waistline:55
// }
// screenResume(girl)
// getResume(girl)