import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSublistComponent } from './catalog-sublist.component';

describe('CatalogSublistComponent', () => {
  let component: CatalogSublistComponent;
  let fixture: ComponentFixture<CatalogSublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
