import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private firestoredb: AngularFirestore)
   {
       
   }
  
  getTorrents()
  {
    return this.firestoredb.collection('torrent').valueChanges();
  }
}
