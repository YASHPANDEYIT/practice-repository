import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit() {
    this.registerForm=this.FormBuilder.group
    
  }
}
