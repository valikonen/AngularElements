import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/lists', pathMatch: 'full'}
        ])
    ]
})

export class AppRoutingModule { }