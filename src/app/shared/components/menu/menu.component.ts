import { Component, OnInit, Inject } from '@angular/core';
import { IMenu } from '../../commons/interfaces/imenu';
import { MenuService } from '../../commons/services/menu.service';
import { CookieHelper } from '../../commons/helpers/cookie-helper';
import { Helper } from '../../commons/helpers/helper';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: IMenu[] = [];

  constructor(
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: object,
    private service: MenuService
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { // run on browser
      this.getMenu();
    }
  }

  private getMenu() {
    if (!CookieHelper.get(Helper.cookie.menu)) {
      this.menus = this.service.get();
      CookieHelper.set(Helper.cookie.menu, JSON.stringify(this.menus));
    }
    this.menus = JSON.parse(CookieHelper.get(Helper.cookie.menu));
  }

}
