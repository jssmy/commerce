import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-content',
  templateUrl: './loading-content.component.html',
  styleUrls: ['./loading-content.component.scss']
})
export class LoadingContentComponent implements OnInit {
  @Input() limit = 8;
  itemLoading: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.limit; i++) {
      this.itemLoading.push(i);
    }
  }

}
