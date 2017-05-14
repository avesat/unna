import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListDetailComponent } from './catalog-list-detail.component';

describe('CatalogListDetailComponent', () => {
  let component: CatalogListDetailComponent;
  let fixture: ComponentFixture<CatalogListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
