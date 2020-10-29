/*
 * @Author: Luo Liangping
 * @Date: 2020-10-20 15:38:30
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-20 15:57:44
 */

// const Status = {
//     MASSAGE:0,
//     SPA:1,
//     DABAOJIAN:2
// }

enum Status{
    MASSAGE =1,
    SPA,
    DABAOJIAN
}


function getServer(status:any){
    if(status === Status.MASSAGE){
        return "massage"
    }
    else if(status === Status.SPA){
        return "SPA"
    }
    else if(status === Status.DABAOJIAN){
        return "dabaojian"
    }
    return 0
}

console.log(Status.MASSAGE)
console.log(Status.SPA)
console.log(Status.DABAOJIAN)

const result = getServer(1)
console.log(`我要去${result}`)