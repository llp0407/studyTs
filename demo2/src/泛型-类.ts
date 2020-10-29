/*
 * @Author: Luo Liangping
 * @Date: 2020-10-20 16:20:54
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-20 16:37:00
 */

interface Girl{
    name:string;
}

class SelectGirl<T extends number | string>{
    constructor(private girls:T[]){
        
    }
    getGirl(index:number):T{
        return this.girls[index]
    }
}
// const selectGirl = new SelectGirl([{name:'大脚'},{name:'刘英'},{name:'晓红'}])
const selectGirl = new SelectGirl<string>(['大脚','刘英','晓红'])
console.log(selectGirl.getGirl(2))