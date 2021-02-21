import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/shared/commons/constants/routes-path.enum';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  classLabelLogin = 'label-auth-active';
  classLabelRegister = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  public redirectToLogin(): void {
    this.classLabelLogin = 'label-auth-active';
    this.classLabelRegister = '';
    this.router.navigate([RoutesPath.AUTH]);
  }

  public redirectToRegister(): void {
    this.classLabelLogin = '';
    this.classLabelRegister = 'label-auth-active';
    this.router.navigate([RoutesPath.AUTH, RoutesPath.REGISTER]);
  }

}
