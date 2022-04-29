import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})



export class DownloadComponent implements OnInit {
  items:Observable<any[]> | undefined;
  comments:Observable<any[]>|undefined;
  constructor(private firedb:DbService) {
    
   }

  ngOnInit(): void {
    this.items = this.firedb.getDatabaseList('torrent');
    this.comments = this.firedb.getDatabaseList('comment');
  }

  getID(id:string)
  {
    console.log(id);
  }



}
