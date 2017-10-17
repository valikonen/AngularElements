import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataGridModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { BreadcrumbService } from '../../common/services/breadcrumb.service';

import { ListsComponent } from './lists.component';
import { ListsService } from './services/lists.service';

import { ListItemComponent } from './list-item/list-item.component';
import { ListItemService } from './list-item/services/list-item.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'lists',
                children: [
                    {
                        path: '',
                        component: ListsComponent
                    },
                    {
                        path: ':listId',
                        component: ListItemComponent
                    }
                ]
            }
        ]),
        DataGridModule,
        DataTableModule,
        SharedModule,
        TranslateModule
    ],
    exports: [
        TranslateModule
    ],
    declarations: [ 
        ListsComponent,
        ListItemComponent
    ],
    providers: [ 
        ListsService,
        ListItemService,
        BreadcrumbService
    ]
})
export class ListsModule { }