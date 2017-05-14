import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-item-left',
  templateUrl: './main-item-left.component.html',
  styleUrls: ['./main-item-left.component.css']
})
export class MainItemLeftComponent implements OnInit {
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
