import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListsComponent } from './lists.component';
import { ListsService } from './services/lists.service';

@NgModule({
    imports: [

    ],
    declarations: [ 
        ListsComponent 
    ],
    providers: [ 
        ListsService 
    ]
})
export class ListsModule { }