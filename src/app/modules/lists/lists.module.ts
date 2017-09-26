import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ListsComponent } from './lists.component';
import { ListsService } from './services/lists.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'lists',
                component: ListsComponent
            }
        ])
    ],
    declarations: [ 
        ListsComponent 
    ],
    providers: [ 
        ListsService 
    ]
})
export class ListsModule { }