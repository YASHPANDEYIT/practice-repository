import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employee=[{"id":1,"name":"Java"},
         {"id":2,"name":"Angular"},
         {"id":3,"name":"React"}];
  constructor() { }

  ngOnInit(): void {
  }

}
