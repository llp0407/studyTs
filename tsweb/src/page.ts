/*
 * @Author: Luo Liangping
 * @Date: 2020-10-20 16:44:23
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-21 14:57:49
 */

import {Header,Content,Foot} from './components'

// namespace Home{
    export default class Page{
        constructor(){
            new Header();
            new Content();
            new Foot();
        }
    }
// }
