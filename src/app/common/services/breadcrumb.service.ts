import { Injectable } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Injectable()
export class BreadcrumbService {

    items: any = [];

    // constructor() {
    //     this.items = [];

    //     this.items.push({ label: 'Lists' });
    // }

    getBreadcrumb(){
        return this.items;
    }

}
