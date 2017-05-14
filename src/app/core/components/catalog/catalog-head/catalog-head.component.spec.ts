import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogHeadComponent } from './catalog-head.component';

describe('CatalogHeadComponent', () => {
  let component: CatalogHeadComponent;
  let fixture: ComponentFixture<CatalogHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
