import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
    exports: [
        TranslateModule
    ],
    declarations: [ 
        ListsComponent 
    ],
    providers: [ 
        ListsService 
    ]
})
export class ListsModule { }