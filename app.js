
//Question-1
//The Object.create() method creates a new object,using an existing object as the prototype of the newly created object.
const person = {
    isHuman:false,
    printIntroduction: function() {
        console.log("My name is ${this.name}.Am I human? ${this.isHuman}");
    }
};

const me = Object.create(person);
me.name="Matthew";
me.isHuman=true;

person.printIntroduction()   //"My name is undefined.Am I human? false"
me.printIntroduction()  //"My name is Matthew.Am I human? true"



//Question-2
function create(fn){
    var o = Object.create(fn.prototype);
    fn.call(o);
    return o;
}

function Thing(){
    this.x=1;
    this.y=2;
    return console.log(3);
}
Thing.prototype.f = function() {console.log(this.x)}
Thing.prototype.g = function() {console.log(this.y)}

var o = create(Thing);

//What does "create" function do? Is there a nickname for it?
//Answer is  "new".(object creator)
o.constructor.name  //"Thing"
o.constructor()  //3
Object.getPrototypeOf(o) === Thing //false
o.Thing()  //TypeError:o.Thing is not a function
o instanceof Thing //true
Thing.constructor.name  //"Function"
Thing instanceof Function  //true




///Question-3
function Human (name,age){
    this.name=name;
    this.age=age ===void 0 ? 30:age;  //  void 0 yani undefined ise age'i 30 alacak.
    this.sound="Hey";
}

Human.age = 35
Human.speak = function(){
    console.log(this.sound);
}
Human.greet = function(){
    console.log("my age is " + this.age);
}
Human.prototype.speak = function(age){
    console.log("my name is " + this.name +", I am " +this.age);
}
Human.prototype.shout() = function(){
    console.log(this.sound + ",my name is" + this.name);
}

var man = new Human()
var woman = new Human("woman")
var boy = new Human("boy",4)
var girl = new boy.constructor("girl")

Human.speak()  //undefined
man.speak()   //"my name is undefined, I am 30"
boy.speak()   //"my name is  boy, I am 4"
woman.speak()  //"my name is woman,I am 30"
Human.greet()   //"my age is 35"
man.sound   //  "Hey"
Human.prototype.speak()  /// "my name is undefined,I am undefined"
boy.greet()   // Uncaught TypeError:boy.greet is not a function
Human.name  //"Human"
girl.shout()  //"Hey,my name is girl"
