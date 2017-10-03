import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { BreadcrumbService } from './common/services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    items = [];

    title = 'app';
    param = { 
      value: 'world'
    };
  
    constructor(private _activatedRoute: ActivatedRoute, 
                private translate: TranslateService,
                private _breadcrumbService: BreadcrumbService) {

        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    }

    ngOnInit() {  
        this.items = this._breadcrumbService.getBreadcrumb();
    }
    
}



// Hello,

// I use **TranslateService** from **@ngx-translate** and every tutorial I found is pretty much the same. 

// The problem is.. I have in root AppComponent this:

//     import { TranslateService } from '@ngx-translate/core';

//     constructor(private translate: TranslateService) {
//         translate.addLangs(["en", "fr"]);
//         translate.setDefaultLang('en');
    
//         let browserLang = translate.getBrowserLang();
//         translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
//     }
// and I want this to be global, the change