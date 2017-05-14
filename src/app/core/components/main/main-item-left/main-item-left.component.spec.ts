import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemLeftComponent } from './main-item-left.component';

describe('MainItemLeftComponent', () => {
  let component: MainItemLeftComponent;
  let fixture: ComponentFixture<MainItemLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
