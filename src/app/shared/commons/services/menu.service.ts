import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/imenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  public get(): IMenu[] {
    return [{
      label: 'Inicio',
      href: '#',
    }, {
      label: 'Mujeres',
      href: '#',
      links: [{
        href: '#',
        label: 'Casual',
      }, {
        href: '#',
        label: 'Vestidos'
      }]
    }, {
      label: 'Hombres',
      href: '#',
      links: [{
        href: '#',
        label: 'Zapatos'
      }, {
        href: '#',
        label: 'Pantalones'
      }, {
        href: '#',
        label: 'Camisas'
      }, {
        href: '#',
        label: 'Zapatillas'
      }, {
        href: '#',
        label: 'Reloj'
      }, {
        href: '#',
        label: 'Lentes'
      }, {
        href: '#',
        label: 'Perfumes'
      }, {
        href: '#',
        label: 'Correas'
      }, {
        href: '#',
        label: 'Medias'
      }]
    }, {
      label: 'Niños',
      href: '#',
    }, {
      label: 'Deportes',
      href: '#',
    }];
  }
}
