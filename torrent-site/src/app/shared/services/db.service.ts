import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private firestoredb: AngularFirestore)
   {
       
   }
  
  getDatabaseList(name:string)
  {
    return this.firestoredb.collection(name).valueChanges();
  }

  createnewUser(data: unknown) {
    return new Promise<any>((resolve, reject) => {
      this.firestoredb
        .collection("user")
        .add(data)
        .then(res => {console.log('Sikeres hozzadas')}, err => reject(err));
    });
  }

  deleteUser(data: any) {
    return this.firestoredb
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }

  updateUser(data: any) {
    return this.firestoredb
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }
}
