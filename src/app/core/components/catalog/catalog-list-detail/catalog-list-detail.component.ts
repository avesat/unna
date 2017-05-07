import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CatalogDetail} from '../../../models/catalog-datail';
import {CatalogService} from '../../../services/catalog.service';

@Component({
  selector: 'app-catalog-list-detail',
  templateUrl: './catalog-list-detail.component.html',
  styleUrls: ['./catalog-list-detail.component.css']
})
export class CatalogListDetailComponent implements OnInit {
  /* TODO: id its debug variable */
  id : string;
  catalogDetails : CatalogDetail[];

  constructor(private catalogSrv: CatalogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        this.catalogDetails = this.catalogSrv.getCatalogDatailsByName(params['id']);
        this.id = JSON.stringify(this.catalogDetails, null, 4);
      });
  }

}
