import {Component, Input, OnInit} from '@angular/core';

import {CatalogDetailItem} from '../../../../models/catalog-detail-item';

@Component({
  selector: 'app-catalog-list-detail-item',
  templateUrl: './catalog-list-detail-item.component.html',
  styleUrls: ['./catalog-list-detail-item.component.css']
})
export class CatalogListDetailItemComponent implements OnInit {
  @Input() detailItems : CatalogDetailItem[];

  constructor() { }

  ngOnInit() {
  }

}
