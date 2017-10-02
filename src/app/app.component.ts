import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { BreadcrumbModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'app';
    param = { 
      value: 'world'
    };
    public items: MenuItem[];
  
    constructor(private _activatedRoute: ActivatedRoute, 
                private translate: TranslateService) {

        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    }

    ngOnInit() {     
        this.items = [];       
        this.items.push({label:'Lists', url: '/lists'});      
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