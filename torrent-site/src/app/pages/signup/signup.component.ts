import { Location } from '@angular/common';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email:  new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });



  constructor(private location:Location,private authServ: AuthService) { }

  ngOnInit(): void {
  }



  onSubmit()
  {
    console.log(this.signUpForm.value);
    this.authServ.signup(this.signUpForm.get("email")?.value,this.signUpForm.get("password")?.value).then(cred =>{
      console.log(cred);
    }).catch(error =>{
      console.error(error);
    })
  }

  goBack(){
    this.location.back();
  }

}
