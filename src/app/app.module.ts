import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { BreadcrumbModule } from 'primeng/primeng';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { DataGridModule } from 'primeng/primeng';
import { ListsModule } from './modules/lists/lists.module';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { RecordsComponent } from './modules/records/records.component';

import { BreadcrumbService } from './common/services/breadcrumb.service';
import { TranslatePipe } from './common/translate.pipe';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecordsComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
    RouterModule,
    HttpModule,
    DataGridModule,
    BreadcrumbModule,
    AppRoutingModule,
    ListsModule
  ],
  providers: [
    BreadcrumbService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
