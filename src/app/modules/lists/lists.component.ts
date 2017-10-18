import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Header} from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { Lists } from './models/lists.model';
import { ListsService } from './services/lists.service';
import { BreadcrumbService } from '../../common/services/breadcrumb.service';

@Component({
    selector: 'lists',
    templateUrl: './lists.component.html'
})
export class ListsComponent implements OnInit {

    lists: Lists[];

    constructor( private translate: TranslateService,
                 private toastr: ToastsManager,
                 vcr: ViewContainerRef,
                 public _confirmationService: ConfirmationService,
                 private _listsService: ListsService,
                 private _breadcrumbService: BreadcrumbService ) {

        this.toastr.setRootViewContainerRef(vcr);
        
        
        
    }

    ngOnInit() {
        this._breadcrumbService.items.push({ label:'Lists', url: '/lists' });
        this._listsService.getLists().subscribe( lists => {
            this.lists = lists;
            console.log("lists: ", this.lists);
        });

    }

    showToastrError(){
        this.toastr.error('We have a lot errors :DDD')
    }
    /**
     * Delete GRID row
     */
    deleteRow(index) {
        
        console.log('OUT: ', index);

        this._confirmationService.confirm({
            message: this.translate.instant('grid_lists.dialog_delete_list'),
            accept: () => {
                //Actual logic to perform a confirmation
                console.log('IN: ', index);
                this.lists = this.lists.filter(function(row) {
                    return row.id != index.id;
                });
            }
        });
        
    }
    

}
