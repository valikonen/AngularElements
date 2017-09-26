import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { DataGridModule } from 'primeng/primeng';
import { ListsModule } from './modules/lists/lists.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    DataGridModule,
    AppRoutingModule,
    ListsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
