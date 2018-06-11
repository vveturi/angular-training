import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childEmittedEvent(data){
    this.title=data;
  }
  user={
    firstName: 'Bill',
    lastName : 'Gates',
    company : 'Microsoft',
    income: 50000,
    dob : new Date("Dec 21, 1965"),
    isWorking : true,
    image :"assets/images/bill.jpg",
    vote:120
    }
}
