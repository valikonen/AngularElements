import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  param = {value: 'world'};
  
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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