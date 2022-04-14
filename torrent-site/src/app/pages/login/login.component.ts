import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.username.value === 'mate214' && this.password.value === 'kaka'){
      this.router.navigateByUrl('/main');
    }
    else{
      alert('Incorrecnt name or password');
    }
  }
  

}
