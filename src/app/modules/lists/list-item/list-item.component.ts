import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreadcrumbService } from '../../../common/services/breadcrumb.service';

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
                private _router: Router,
                private _breadcrumbService: BreadcrumbService) { }

    ngOnInit() { 
        let listId = this._activatedRoute.params['listId'];

        this._listItemService
            .getListItem(listId)
            .subscribe(listData => {
                this.list = listData
            });
            
        if(listId) {
            console.log("listId: ", listId);
            this._breadcrumbService.items.push({label: `Lists ${listId}`, url: `/lists/${listId}`}); 
        }
    }

    onUpdateList() {
        this._listItemService
            .updateList(this.list)
            .subscribe( listData => {
                this.list = listData
            });
    }

}