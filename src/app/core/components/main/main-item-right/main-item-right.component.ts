import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-item-right',
  templateUrl: './main-item-right.component.html',
  styleUrls: ['./main-item-right.component.css']
})
export class MainItemRightComponent implements OnInit {
  @Input() headImagePath: string;
  @Input() headDescription: string;
  @Input() itemDescription: string;
  @Input() mainImagePath: string;
  @Input() textColor: string;
  @Input() btnImgDefault : string;
  @Input() btnImgHover: string;

  constructor() { }

  ngOnInit() {
  }

}
