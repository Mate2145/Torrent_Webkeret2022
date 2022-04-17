import { Location } from '@angular/common';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/Users';
import { DbService } from 'src/app/shared/services/db.service';

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
    birth: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });



  constructor(private location:Location,private authServ: AuthService,private dbservice:DbService) { }

  ngOnInit(): void {
  }



  onSubmit()
  {
    //console.log(this.signUpForm.value);
    //this.authServ.signup(this.signUpForm.get("email")?.value,this.signUpForm.get("password")?.value).then(cred =>{
    //  console.log(cred);
    //}).catch(error =>{
    //  console.error(error);
    //})
    const user:User = {
      email: this.signUpForm.get('email')?.value,
      name: {
        firstname: this.signUpForm.get('name.firstname')?.value,
        lastname: this.signUpForm.get('name.lastname')?.value
      },
      dateofbirth: new Date(this.signUpForm.get('birth')?.value),
      admin: false
    }
    console.log(user);
    this.dbservice.createnewUser(user);
  }

  goBack(){
    this.location.back();
  }

}
