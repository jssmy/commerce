import { Component, OnInit } from '@angular/core';
import { Igrid, IStyleGrid } from '../../commons/interfaces/igrid';
import { style } from '@angular/animations';

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
        image: 'assets/img/grid/5.jpg',
        style: {
          background: '#fdfdfdab',
          color: '#333333'
        }
      },
      {
        href: null,
        title: 'Todo en moda para él y ella',
        image: 'assets/img/grid/18.jpg',
        style: {
          background: '#fdfdfdab',
          color: '#333333'
        }
      },
      {
        href: null,
        title: 'Belleza y cosméticos',
        image: 'assets/img/grid/13.jpg',
        style: {
          background: '#fdfdfdab',
          color: '#333333'
        }
      },
      {
        href: null,
        title: 'Calzados de hommbres',
        image: 'assets/img/grid/1.jpg',
        style: {
          background: '#fdfdfdab',
          color: '#333333'
        }
      },
      {
        href: null,
        title: 'Calzados para damas',
        image: 'assets/img/grid/2.jpg',
        style: {
          background: '#fdfdfdab',
          color: '#333333'
        }
      }
    ];
    this.gridLeft.push(this.gridConent[0])
    for(let i=1; i < this.gridConent.length; i++) {
      this.gridRigth.push(this.gridConent[i]);
    }
  }

}
