import { Component, OnInit } from '@angular/core';

import { CatalogItem } from '../../../models/catalog-item'

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  private catalogItems : CatalogItem[];
  srvCatalogItems : CatalogItem[] = [
    {
      name: 'catalogItem1',
      imgPath: 'assets/img/catalog-icon.png'
    },
    {
      name: 'catalogItem2',
      imgPath: 'assets/img/catalog-icon.png'
    },
    {
      name: 'catalogItem3',
      imgPath: 'assets/img/catalog-icon.png'
    },
    {
      name: 'catalogItem4',
      imgPath: 'assets/img/catalog-icon.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.catalogItems = this.srvCatalogItems;
  }

}
