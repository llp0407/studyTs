/*
 * @Author: Luo Liangping
 * @Date: 2020-10-16 17:38:57
 * @LastEditors: Luo Liangping
 * @LastEditTime: 2020-10-16 17:45:02
 */
class Lady {
    content = 'Hi 帅哥'
    sayHello(){
        return this.content
    }
}

class Lady2 extends Lady {
    sayHello(){
        return super.sayHello()+'.你好！'
    }

    sayLove(){
        return 'I Love you'
    }
}

const goddess = new Lady2()
console.log(goddess.sayHello())
console.log(goddess.sayLove())