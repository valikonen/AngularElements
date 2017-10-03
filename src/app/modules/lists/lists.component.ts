import { Component, OnInit } from '@angular/core';

import { Header} from 'primeng/primeng';
import { Footer } from 'primeng/primeng';

import { Lists } from './models/lists.model';
import { ListsService } from './services/lists.service';
import { BreadcrumbService } from '../../common/services/breadcrumb.service';

@Component({
    selector: 'lists',
    templateUrl: './lists.component.html'
})
export class ListsComponent implements OnInit {

    lists: Lists[];

    constructor( private _listsService: ListsService,
                 private _breadcrumbService: BreadcrumbService ) {

    }

    ngOnInit() {
        this._breadcrumbService.items.push({ label:'Lists', url: '/lists' });
        this._listsService.getLists().subscribe( lists => {
            this.lists = lists;
            console.log("lists: ", this.lists);
        });

    }

}
