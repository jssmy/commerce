import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/auth.helper';
import { AuthService } from 'src/app/auth/auth.service';
import { RoutesPath } from 'src/app/shared/commons/constants/routes-path.enum';
import { CookieHelper } from 'src/app/shared/commons/helpers/cookie-helper';
import { IAuthUser } from 'src/app/shared/commons/interfaces/auth/iauth-user';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss']
})
export class HeaderBottomComponent implements OnInit {
  authCheck: boolean = Auth.check();
  auth: IAuthUser;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (Auth.check()) {
      this.auth = Auth.user();
    }
  }

  logOut(event) {
    event.preventDefault();
    this.authService.logout().toPromise().finally(() => {
      CookieHelper.removeAll();
      window.location.reload();
    });

  }

}
