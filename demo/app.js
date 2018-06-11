// import {Student} from './Student';
// import { Person } from './Person';
//Classes & Inheritence
// class Student{
//     firstName : string;
//     lastName : string;
//     age : number;
//     constructor(firstName:string, lastName:string, age:number){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     getFullName() : string{
//         return this.firstName+""+this.lastName;
//     }
// }
// let foo1: Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age :32
// }
// let Obj = new Student(foo1)
// console.log(Obj.getFullName());
//Arrow functions
// let someObj = {
//     firstName : "Foo",
//     lastName: "Bar",
//     getFullName: function(){
//         console.log(this);//someObj
//         var that= this;//to save the refernce of this obj
//         function nestFunc(){
//             console.log(this);//window obj
//         return that.firstName+""+that.lastName;
//     }
//     return nestFunc();
//     }
// }
// console.log(someObj.getFullName());
// let numbers=[2,3,4,5];
// // let newArr= numbers.map(function(v){
// //     return v*2;
// // });
// let newArr = numbers.map((v)=>v*2);// same as aboe for one liner functions
// console.log(newArr);
//Multi line strig
// var firstName="Venugopal";
// console.log(`Hello - ${firstName}`);
//Constants and block scopes
//let
//const
// function demo(arr){
//     if(arr.length >2){
//         let flash="flashing";
//         //console.log(load)//undefined
//         console.log(flash)//undefined
//     }
//     else{
//         let load="loading";
//     }
// }
// demo(["x","y","z"])
// function mystery(){
//     function chooseNumber(){
//         return 7;
//     }
//     return chooseNumber();
//     function chooseNumber(){
//         return 12;
//     }
// }
//Destructuring :Object & Arrays
// let arr=["foo","bar","bam","bas"];
// let [arr1,arr2,arr3,arr4]=arr;
// console.log(arr3); //?
// let myObject={
//     drawCircle: function(r){console.log(Math.PI*r*r)},
//     drawText: function(text){console.log("Drawing "+text)}
// }
// //let {drawCircle,drawText} =myObject;
// let {drawText,drawCircle} =myObject;//Order doesnt matter as it is by reference
// drawText("Sample Text");
//Spread & Rest operators(...)
// var arr=[3,4,5];
// var newArr= [1,2,arr];// spread - multiple to one
// function demo(...args){//rest operatoe
// console.log(args);
// }
// demo("foo");
// demo("foo","bar");
// demo("foo","bar","bam", true,32);
//Decorator(annotation)class decorator,property decorator,method decorator,parameter decorator
var Test = /** @class */ (function () {
    function Test() {
        // @nonWritable()
        this.test = "testing";
    }
    return Test;
}());
console.log(new Test().test);
