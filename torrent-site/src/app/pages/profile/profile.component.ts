import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/Users';
import { DbService } from '../../shared/services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  item: User | undefined;
  constructor(private dbservice: DbService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.dbservice.getUserbyId(user.uid).subscribe(data =>{
      this.item = data;
    });
  }

}
