/*
 * @Author: Luo Liangping
 * @Date: 2020-10-13 15:45:03
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-13 15:54:12
 */
const numberArr:number[] = [1,2,3]
const stringArr:string[] = ['a','b','c']
const undefinedArr:undefined[] = [undefined]
const arr:(number | string)[] = [1,'string',2]

// type alias 类型别名
// type
// interface
type Lady = {
    name:string,
    age:number
}
class Madam {
    name:string;
    age:number;
}

const xiaojiejies2:Madam[] = [
    {
        name:'柳荫',
        age:18
    },
    {
        name:'谢大脚',
        age:18
    },
]