import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsService } from './services/lists.service';

@NgModule({
    imports: [
        CommonModule 
    ],
    declarations: [ 
        ListsComponent 
    ],
    providers: [ 
        ListsService 
    ]
})
export class ListsModule { }