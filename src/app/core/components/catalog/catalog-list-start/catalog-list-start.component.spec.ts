import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListStartComponent } from './catalog-list-start.component';

describe('CatalogListStartComponent', () => {
  let component: CatalogListStartComponent;
  let fixture: ComponentFixture<CatalogListStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
