import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseOperation } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class QueryListService {
  requests: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.requests = db.list('https://my-search-todo.firebaseio.com/list', {
      query: {
        orderByKey: true
      }
    });
   }

  setDataToDB(formValues: {stringRequest: string, createdAt?: object}): void {
    formValues.createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    this.requests.push(formValues);

  }

  getDataFromDB(): FirebaseListObservable<any> {
    return this.requests;
  }

  removeRequest(key: FirebaseOperation): void {
    this.requests.remove(key);
    // this.readDataFromDB();
  }

}
