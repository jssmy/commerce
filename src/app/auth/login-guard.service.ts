import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RoutesPath } from '../shared/commons/constants/routes-path.enum';
import { Auth } from './auth.helper';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!Auth.check()) {
        return true;
    }
    return this.router.parseUrl(RoutesPath.MAIN);
  }
}
