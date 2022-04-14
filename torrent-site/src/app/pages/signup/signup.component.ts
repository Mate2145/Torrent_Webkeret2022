import { Location } from '@angular/common';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../shared/models/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    username:  new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });



  constructor(private location:Location,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm(user: User)
  {
    return this.fb.group(user);
  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  goBack(){
    this.location.back();
  }

}
