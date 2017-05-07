import {Injectable} from '@angular/core';

import {CatalogItem} from '../models/catalog-item'
import {CatalogDetail} from '../models/catalog-datail'

@Injectable()
export class CatalogService {
  private catalogData: CatalogItem[] = [
    {
      name: 'catalogItem1',
      imgPath: 'assets/img/catalog-icon.png',
      catalogDetails: [
        {
          name: 'Item1-Detail1',
          catalogDetailItems: [
            {
              imgPath: 'assets/img/catalog-icon.png',
              name: 'Item1-Detail1-comp1',
              description: 'Item1-Detail1-description1',
              price: '111 usd'
            },
            {
              imgPath: 'assets/img/catalog-icon.png',
              name: 'Item1-Detail1-comp2',
              description: 'Item1-Detail1-description2',
              price: '112 usd'
            },
            {
              imgPath: 'assets/img/catalog-icon.png',
              name: 'Item1-Detail1-comp3',
              description: 'Item1-Detail1-description3',
              price: '113 usd'
            }
          ]
        },
        {
          name: 'Item1-Detail2',
          catalogDetailItems: [
            {
              imgPath: 'assets/img/catalog-icon.png',
              name: 'Item1-Detail2-comp1',
              description: 'Item1-Detail2-description1',
              price: '121 usd'
            },
          ]
        },
        {
          name: 'Item1-Detail3',
          catalogDetailItems: [
            {
              imgPath: 'assets/img/catalog-icon.png',
              name: 'Item1-Detail3-comp1',
              description: 'Item1-Detail3-description1',
              price: '131 usd'
            },
            {
              imgPath: 'assets/img/catalog-icon.png',
              name: 'Item1-Detail3-comp2',
              description: 'Item1-Detail3-description2',
              price: '132 usd'
            },
          ]
        }
      ]
    },
    {
      name: 'catalogItem2',
      imgPath: 'assets/img/catalog-icon.png',
      catalogDetails: [
        {
          name: 'Item2-Detail1',
          catalogDetailItems: []
        },
        {
          name: 'Item2-Detail2',
          catalogDetailItems: []
        }
      ]
    },
    {
      name: 'catalogItem3',
      imgPath: 'assets/img/catalog-icon.png',
      catalogDetails: [
        {
          name: 'Item3-Detail1',
          catalogDetailItems: []
        },
        {
          name: 'Item3-Detail2',
          catalogDetailItems: []
        },
        {
          name: 'Item3-Detail3',
          catalogDetailItems: []
        },
        {
          name: 'Item3-Detail4',
          catalogDetailItems: []
        }
      ]
    },
    {
      name: 'catalogItem4',
      imgPath: 'assets/img/catalog-icon.png',
      catalogDetails: [
        {
          name: 'Item4-Detail1',
          catalogDetailItems: []
        },
        {
          name: 'Item4-Detail2',
          catalogDetailItems: []
        }
      ]
    }
  ];

  constructor() {
  }

  getCatalogData(): CatalogItem[] {
    return this.catalogData;
  }

  getCatalogDatailsByName(name: string): CatalogDetail[] {
    return this.catalogData.find( elem => elem.name === name ).catalogDetails;
  }

}
