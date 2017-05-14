import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemRightComponent } from './main-item-right.component';

describe('MainItemRightComponent', () => {
  let component: MainItemRightComponent;
  let fixture: ComponentFixture<MainItemRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
