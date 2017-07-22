import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { QueryListComponent } from './query-list/query-list.component';
import { QueryItemComponent } from './query-list/query-item/query-item.component';
import { QueryListService } from './query-list.service';


const routes: Routes = [
  { path: '', component: QueryListComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    QueryListComponent,
    QueryItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [QueryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
