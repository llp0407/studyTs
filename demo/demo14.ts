/*
 * @Author: Luo Liangping
 * @Date: 2020-10-19 21:48:47
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-19 22:00:32
 */

abstract class Girl {
    abstract skill()
    
}


class Waiter extends Girl{
    // 继承抽象类必须 实现抽象类里的抽象方法
    skill(){
        // 业务逻辑
        console.log('大爷请喝水')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('大爷来个泰式按摩吧')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('大爷来个泰式按摩吧')
    }
}