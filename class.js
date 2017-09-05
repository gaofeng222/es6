/**
 * Created by Administrator on 2017/9/5 0005.
 */

//传统的原型式写法
/*function Point(x,y){
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function(){
    return this.x + ',' + this.y;
}

var p = new Point(1,2);
console.log(p.toString())*/

//类的写法

class Point {
    constructor(x,y){
        this.x = x ;
        this.y = y;
    }
    toString(){
        return this.x + ',' + this.y
    }
}

/*console.log(typeof Point)*/
var p = new Point(1,2)
console.log(p.x)
console.log(p.y)
console.log(p.toString())


class Bar{
    doStuff(){
        console.log('stuff')
    }
}

var b = new Bar();
b.doStuff()


class New {
    constructor(){

    }
}

Object.assign(New.prototype,{
    toHalve(){
        return "aa"
    }
})

var n = new New();
console.log(n.toHalve())



//constructor 方法

class Point2{
    constructor(){
        return Object.create(null)
    }
}

var a = new Point2();
console.log(a instanceof Point2)


//类的实例对象
class Point3{};
var p3 = new Point3(2,3)




//实例的属性除非显式定义在其本身
// （即定义在this对象上），否则都是定义在原型上

class Point4 {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return this.x + ',' + this.y
    }
}

var p4 = new Point(2,3)
console.log(p4.x)
console.log(p4.y)
console.log(p4.toString())

console.log(p4.hasOwnProperty('x'))



































