import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[];

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.items = [];
    this.items.push({label:'Lists', url: '/lists'});
    // this.items.push({label:'Enregistrements', url:'/records'});
    // this.items.push({label: 'Administration', url:'/something'})
  }

}
