import { Component, OnInit } from '@angular/core';

import { Header} from 'primeng/primeng';
import { Footer } from 'primeng/primeng';

import { Lists } from './models/lists.model';
import { ListsService } from './services/lists.service';

@Component({ 
    selector: 'lists',   
    templateUrl: './list.component.html' 
})
export class ListsComponent implements OnInit {

    lists: Lists[];

    constructor( private _listsService: ListsService ) {

    }

    ngOnInit() { 
        this._listsService.getLists().subscribe( lists => {
            this.lists = lists;
            console.log("lists: ", this.lists);
        });
        
    }

}