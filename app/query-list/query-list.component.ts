import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseOperation } from 'angularfire2/database';
import { QueryListService } from '../query-list.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {
  requests: FirebaseListObservable<any>;
  stringRequest = new FormControl('',
  [Validators.required, Validators.maxLength(100), Validators.minLength(1)]);
  searchForm = new FormGroup({
    stringRequest: this.stringRequest
  });

  constructor(private queryListService: QueryListService) {
   }

  ngOnInit() {
    this.getListOfRequests();
  }

  search(formValues: {stringRequest: string}): void {
    formValues.stringRequest = formValues.stringRequest && formValues.stringRequest.trim();
    if (formValues.stringRequest && this.searchForm.valid) {
      this.queryListService.setDataToDB(formValues);
      this.searchForm.reset();
      this.getListOfRequests();
    }
  }

  validateRequest(): boolean {
    return this.stringRequest.valid || !this.stringRequest.dirty;
  }

  getListOfRequests(): void {
    this.requests = this.queryListService.getDataFromDB()
    .map(arr => arr.reverse()) as FirebaseListObservable<any[]>;
  }

  removeRequest(key: FirebaseOperation): void {
    this.queryListService.removeRequest(key);
    this.getListOfRequests();
  }

}
