import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/shared/services/db.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ComdialogComponent } from 'src/app/shared/comdialog/comdialog.component';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})



export class DownloadComponent implements OnInit {
  items:Observable<any[]> | undefined;
  comments:Observable<any[]>|undefined;
  user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
  tabindex:number|undefined;
  constructor(private firedb:DbService,
    private dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.items = this.firedb.getDatabaseList('torrent');
    this.comments = this.firedb.getDatabaseList('comment');
  }

  getID(id:string)
  {
    console.log(id);
  }

  openDialog(id:string)
  {
    this.dialog.open(ComdialogComponent,{
      width: '500px',
      data: {ownerid: id},
    });
  }

  refreshComment($event:any,id:string){
    let index = $event.index;
    if(index === 0){
      return;
    }
    else{
      this.comments = this.firedb.selectCommentsById(id);
    }
    
  }

  refreshCommentExpand($event:any,id:string)
  {
    this.comments = this.firedb.selectCommentsById(id);
  }

  setStep()
  {

  }

  onDelete(id:string)
  {
    this.firedb.deleteObject("torrent",id).then(()=>{
      window.alert('Sikeres torles');
    });
    
  }

  onDeleteParam(name:string,id:string)
  {
    this.firedb.deleteObject(name,id).then(()=>{
      window.alert('Sikeres torles');
    });
    
  }


}
