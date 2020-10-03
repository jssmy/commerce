import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesPath } from '../shared/commons/constants/routes-path.enum';
import { Auth } from './auth.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (Auth.check()) {
      return true;
    }
    return this.router.parseUrl(RoutesPath.LOGIN);
  }

}
