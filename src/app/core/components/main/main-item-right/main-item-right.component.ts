import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.btnClick.emit();
  }

}
