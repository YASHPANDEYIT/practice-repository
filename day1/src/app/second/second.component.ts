import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  userName:string= 'John Doe'
  emailId:string= 'john.doe@gmail.com'
  contactNo:number= 9876543210
  address:string= '424  McVaney Road, Franklin, North Carolina, 28734'
  height:string= `5'6"`
  weight:number= 82
  education:string='High school diploma or GED'

  constructor() { }

  ngOnInit(): void {
  }

}
