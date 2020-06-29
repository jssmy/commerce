import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/commons/interfaces/ilink';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  constructor() { }
  headerTopOptions: ILink[];
  ngOnInit(): void {
    this.headerTopOptions = [{
      href: '#',
      label: 'Mi cuenta',
      class: 'hidden-xs',
      key: 'account'
    }, {
      href: '#',
      label: 'Mis deseos',
      class: 'hidden-xs',
      key: 'wishlist'
    },{
      href: '#',
      label: 'Mi carrito',
      class: 'hidden-xs',
      key: 'my-cart'
    },{
      href: '#',
      label: 'Iniciar sesión',
      class: 'hidden-xs',
      key: 'login'
    }];
  }

}
