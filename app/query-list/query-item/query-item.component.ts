import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-query-item',
  templateUrl: './query-item.component.html',
  styleUrls: ['./query-item.component.css']
})
export class QueryItemComponent {
  @Input() data: any;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  remove(): void {
    this.eventClick.emit();
  }

}
