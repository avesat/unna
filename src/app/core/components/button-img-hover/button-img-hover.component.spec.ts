import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImgHoverComponent } from './button-img-hover.component';

describe('ButtonImgHoverComponent', () => {
  let component: ButtonImgHoverComponent;
  let fixture: ComponentFixture<ButtonImgHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonImgHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonImgHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
