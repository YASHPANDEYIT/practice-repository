import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    books=[{"id":1,"name":"Java"},
         {"id":2,"name":"Angular"},
         {"id":3,"name":"React"}];
         gotoEmployee()
         {
           this.router.navigate(['/employee'])

         }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
