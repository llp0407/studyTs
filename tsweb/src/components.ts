/*
 * @Author: Luo Liangping
 * @Date: 2020-10-20 17:07:37
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-21 14:46:11
 */

// namespace Components{
//     export namespace SubComponents{
//         export class Test{
//             constructor(){
//                 console.log(546)
//             }
//         }
//     }

    export class Header {
        constructor(){
            const elem = document.createElement("div")
            elem.innerText = "this is Header"
            document.body.appendChild(elem)
        }
    }
    
    export class Content {
        constructor(){
            const elem = document.createElement("div")
            elem.innerText = "this is Content"
            document.body.appendChild(elem)
        }
    }
    
    export class Foot {
        constructor(){
            const elem = document.createElement("div")
            elem.innerText = "this is Foot"
            document.body.appendChild(elem)
        }
    }
// }