import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rd-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.less']
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  @Input() height: any = 75;
  @Input() width: any = 75;
  @Input() src: string = "https://assets.listia.com/photos/906aea0f142d9ba040d5/original.jpg?s=320x320m&sig=7ccd9e662afed4e3&ts=1376259719";

  constructor() { }

  ngOnInit() {
    //console.log('**** loading-indicator init() ****');
  }

  ngOnDestroy() {
    //console.log('**** loading-indicator destroy() ****');
  }
}
