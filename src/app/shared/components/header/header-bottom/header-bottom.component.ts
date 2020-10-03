import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.helper';
import { CookieHelper } from 'src/app/shared/commons/helpers/cookie-helper';
import { IAuthUser } from 'src/app/shared/commons/interfaces/auth/iauth-user';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss']
})
export class HeaderBottomComponent implements OnInit {
  authCheck: boolean = Auth.check();
  constructor() { }

  ngOnInit(): void {
  }

  logOut(event) {
    event.preventDefault();
    CookieHelper.removeAll();
  }

}
