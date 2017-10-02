import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreadcrumbModule, MenuItem } from 'primeng/primeng';

import { ListItemService } from './services/list-item.service';
import { Lists } from '../models/lists.model';

@Component({    
    templateUrl: 'list-item.component.html'
})
export class ListItemComponent implements OnInit {
    
    list;
    items;

    constructor(private _listItemService: ListItemService,
                private _activatedRoute: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() { 
        let listId = this._activatedRoute.params['listId'];

        this._listItemService
            .getListItem(listId)
            .subscribe(listData => {
                this.list = listData
            });
        this.items = [];
        this.items.push({label: `Lists ${listId}`, url: `/lists/${listId}`}); 
    }

    onUpdateList() {
        this._listItemService
            .updateList(this.list)
            .subscribe( listData => {
                this.list = listData
            });
    }

}