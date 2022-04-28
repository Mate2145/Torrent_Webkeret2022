import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/Users';
import { DbService } from '../../shared/services/db.service';
import {Router} from "@angular/router"
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  userdb:User|undefined;

  torrentForm = new FormGroup({
    name:  new FormControl(''),
    size: new FormControl(''),
    metric: new FormControl(''),
    date: new FormControl(''),
    link: new FormControl(''),
    owner: new FormControl('')
  });

  constructor(private dbservice:DbService) { }

  ngOnInit(): void
   {
   
  }

   async onSubmit()
  {
    await this.getOwner();
     console.log(this.userdb?.username);
     

    
  }

  goBack(){

  }

   getOwner()
  {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    return new Promise<void>((resolve,reject) =>
    {
      this.dbservice.getUserbyId(user.uid).subscribe(
      {
        next: data =>
        {
          this.userdb = data;
          resolve();
        }
      });
    });
    
  }

}
