import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css']
})
export class PComponent implements OnInit {
  name : string="raj"

  constructor() { }

  ngOnInit(): void {
  }

}
