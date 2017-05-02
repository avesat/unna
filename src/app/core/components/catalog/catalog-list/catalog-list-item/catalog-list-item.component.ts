import {Component, Input, OnInit} from '@angular/core';

import { CatalogItem } from '../../../../models/catalog-item'

@Component({
  selector: 'app-catalog-list-item',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.css']
})
export class CatalogListItemComponent implements OnInit {
  @Input() item : CatalogItem;

  constructor() { }

  ngOnInit() {
  }

}
