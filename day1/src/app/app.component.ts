import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{  
  userName:string= 'John Doe'
  emailId:string= 'john.doe@gmail.com'
  contactNo:number= 9876543210
  address:string= '424  McVaney Road, Franklin, North Carolina, 28734'
  height:string= `5'6"`
  weight:number= 82
  education:string='High school diploma or GED'
}

