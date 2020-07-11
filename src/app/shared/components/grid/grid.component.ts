import { Component, OnInit } from '@angular/core';
import { Igrid } from '../../commons/interfaces/igrid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  gridConent: Igrid[] = [];
  gridLeft: Igrid[]   = [];
  gridRigth: Igrid[]  = [];
  constructor() { }

  ngOnInit(): void {
    this.default();
  }

  default() {
    this.gridConent = [
      {
        href: '#',
        title: 'Nuevas tiendas se unieron',
        image: 'assets/img/grid/1.jpg'
      },
      {
        href: null,
        title: 'Tiendas comerciales',
        image: 'assets/img/grid/2.jpg'
      },
      {
        href: null,
        title: 'Tiendas comerciales',
        image: 'assets/img/grid/3.jpg'
      },
      {
        href: null,
        title: 'Tiendas comerciales',
        image: 'assets/img/grid/1.jpg'
      },
      {
        href: null,
        title: 'Tiendas comerciales',
        image: 'assets/img/grid/2.jpg'
      }
    ];
    this.gridLeft.push(this.gridConent[0])
    for(let i=1; i < this.gridConent.length; i++) {
      this.gridRigth.push(this.gridConent[i]);
    }
  }

}
