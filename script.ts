// string
// export {}
// var name = "Biki";
// // name = 12;
// // number
// var age: number;
// age = 28;
// // age = true;
// // boolean
// var isItTrue: boolean;
// // isItTrue = 1
// // implicit or explicit

// // array
// // var fruits: string[] = ["jabuke", "Banane", 1]
// // var array2:[string, boolean] = [true, "bla"]
// // multiple types
// var multi: string | number = "bla";
// multi = 12;
// // multi = true;
// var multiArray: (string | number)[] = ["a", 1]
// // var multiArray2: string[] | number[] = ["a", 1]
// // any
// var h;
// h = 12;
// h = true;
// // functions
// function bla2(value:number):void {
//     // console.log()
// }

// // functions as types
// var bla3: (x: number) => void;
// // objects
// var user:User = {
//     name: "Goran",
//     job: "Hunter"
// }

// // objects implicit 
// var user2: User = {
//     name: "Goran",
//     favoriteSport: "Hunting",
//     returnAge():void {
        
//     },
//     bla42(val:number) {
//         return val + 1;
//     }
// }
// // type alias
// // type User = {name: string, job?: string,[key:string]:any, bla42(val:number) => number}

// // never
// function err():never {
//     throw new Error("err")
// }

// null and strict null checks
function bla54(isItTrue: boolean) {
    let num: number;
    if(isItTrue) {
        num = 12;
    }
    num = 33;
    return num;
}

// compailer errors, no emmit on erros, source maps, noImplicitAny

// smart compailer, strict null checks

// we dont need babel
// async function bla23() {
//     console.log("TEST")
// }
// class
class Person {
    public readonly age = 29;
    private tajna ="tajna"
    protected tajna2 = "tajna2"

    // get age() {
    //     return this._age;
    // }

    // set age(val:number) {
    //     this._age = val;
    // }
    constructor(public name:string) {
        this.name = name
    }

}
var person1 = new Person("Biki");
// console.log(person1.age)
// person1.age = 28;
// person1.age = 12;
// person1.name
// private, public, protected, readonly

// constructor, shortcut for properties

// private methods

// inheritance, extends, overwrite, super()
class Branko extends Person {
   public hobbie = "Beer"
}

var branko = new Branko("Branko");
// branko.hobbie
// getters, setters

// static properties, methods (helpers)

// abstract classes

// interface, optional args, unknown props, methods

// Generics


