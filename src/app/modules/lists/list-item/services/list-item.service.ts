import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Lists } from '../../models/lists.model';

@Injectable()
export class ListItemService {
    
    constructor( private _http: Http ) { }
    
    /**
     * GET List by List ID
     * @param { listId } 
     */
    getListItem(listId: number): Observable<Lists[]> {
        return this._http
                   .get(`http://juan-regliss.getsandbox.com/lists/${listId}`)
                   .map(res => res.json())
    }

    /**
     * Update List
     */
    updateList(list: Lists): Observable<Lists> {
        return this._http
                   .put(`http://juan-regliss.getsandbox.com/lists`, list)
                   .map( res => res.json())
    }

}