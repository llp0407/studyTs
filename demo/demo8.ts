// /*
// //  * @Author: Luo Liangping
// //  * @Date: 2020-10-16 16:50:24
//  * @LastEditors: Luo Liangping
//  * @LastEditTime: 2020-10-16 17:37:03
// //  */
// interface Girl {
//     name:string,
//     age:number,
//     bust:number,
//     waistline?:number,
//     [propname:string]:any,
//     say():string
// }

// interface Teacher extends Girl{
//     teach():string;
// }

// class XiaoJ implements Girl {
//     name='刘英';
//     age=18;
//     bust=90;
//     say(){
//         return ''
//     }
// }
// const screenResume = (girl:Girl)=>{
//     girl.age < 24 && girl.bust >=90 && console.log(girl.name+'进入面试')
//     girl.age >= 24 || girl.bust <90 && console.log(girl.name+'你被淘汰')
// }

// const getResume = (girl:Teacher)=>{
//     console.log(girl.name + '年龄是' + girl.age)
//     console.log(girl.name + 'bust是' + girl.bust)
//     console.log(girl?.waistline)
//     girl?.waistline && console.log(girl.name + 'waisline是' + girl.waistline)
//     girl.sex && console.log(girl.name + '性别是' +girl.sex)
//     console.log(girl.teach)
// }

// let girl = {
//     name:'大脚',
//     age:18,
//     bust:94,
//     waistline:55,
//     sex:'女',
//     1:'是',
//     say(){
//         return '欢迎光临'
//     },
//     teach(){
//         return '我来教你'
//     }
// }
// screenResume(girl)
// getResume(girl)
// console.log(girl.say())