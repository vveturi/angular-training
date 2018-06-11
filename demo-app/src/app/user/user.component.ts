import { Component,Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector : 'app-user',
    //template : '<h1>User Component loaded </h1>'
    templateUrl : './user.component.html'
})
export class UserComponent{
    @Input('title') title :string;
    @Input('user') user :any;
    firstName: string ='Bill';
    @Output('childEvent') childEvent= new EventEmitter<string>();
    onkeyup(value){
        this.childEvent.emit(value);
    }
}