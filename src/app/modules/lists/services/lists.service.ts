import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Lists } from '../models/lists.model';

@Injectable()
export class ListsService {
    
    constructor( private _http: Http ) { }

    getLists(): Observable<Lists[]> {
        return this._http
                   .get('http://iwillsurvive.getsandbox.com/lists')
                   .map(res => res.json())
    }

}