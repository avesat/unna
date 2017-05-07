import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListDetailItemComponent } from './catalog-list-detail-item.component';

describe('CatalogListDetailItemComponent', () => {
  let component: CatalogListDetailItemComponent;
  let fixture: ComponentFixture<CatalogListDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
