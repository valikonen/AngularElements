import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { DataGridModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

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
        ]),
        DataGridModule,
        DataTableModule, 
        SharedModule
    ],
    declarations: [ 
        ListsComponent 
    ],
    providers: [ 
        ListsService 
    ]
})
export class ListsModule { }