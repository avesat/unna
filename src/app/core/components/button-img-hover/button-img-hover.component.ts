import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-img-hover',
  template: `<img [src]="currentImagePath"/>`,
  styleUrls: ['./button-img-hover.component.css']
})
export class ButtonImgHoverComponent implements OnInit {
  @Input() srcDefault : string;
  @Input() srcHover: string;
  private currentImagePath: string;

  constructor() { }

  ngOnInit() {
    this.currentImagePath = this.srcDefault;
  }

  @HostListener('mouseover')
  onOver() {
    this.currentImagePath = this.srcHover;
  }

  @HostListener('mouseout')
  onOut() {
    this.currentImagePath = this.srcDefault;
  }
}
