let s;
class Figure {
    #x;
    #y;
    constructor(x,y){
        this.#x = x;
        this.#y = y;
    }
    square(){
        console.log('undefined');
    }
}
class Circle extends Figure {
    #r;
    constructor(x,y,r){
        super(x,y);
        this.#r = r;
    }
    square (){
        s = 3.14*(this.#r)**2;
        console.log(s);
    }
}
class Rectangle extends Figure {
    #h;
    #w;
    constructor(x,y,h,w){
        super(x,y);
        this.h = h;
        this.w = w;
    }
    square (){
        s = (this.h)*(this.w);
        console.log(s);
    }
}
const f1 = new Figure(5,6);
const c1 = new Circle(2,3,8);
const r1 = new Rectangle(2,3,9,11);
f1.square();
c1.square();
r1.square();