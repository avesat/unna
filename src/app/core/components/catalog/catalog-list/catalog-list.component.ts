import { Component, OnInit } from '@angular/core';

import { CatalogItem } from '../../../models/catalog-item';
import { CatalogService } from '../../../services/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  private catalogItems : CatalogItem[];

  constructor(private catalogSrv: CatalogService) { }

  ngOnInit() {
    this.catalogItems = this.catalogSrv.getCatalogData();
  }

}
