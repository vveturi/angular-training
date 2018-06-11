import { Person } from "./Person";

export class Student{
    firstName : string;
    lastName : string;
    age : number;
    constructor(obj : Person){
        this.firstName=obj.firstName;
        this.lastName=obj.lastName;
        this.age=obj.age;
    }
    getFullName() : string{
        return this.firstName+""+this.lastName;
    }
}