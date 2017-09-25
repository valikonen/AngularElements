import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { DataGridModule } from 'primeng/primeng';
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataGridModule,
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
