import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { LoaderService } from './shared/commons/interceptors/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestService } from './shared/commons/interceptors/request.service';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLayoutModule } from './pages/auth/auth-layout/auth-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AuthLayoutModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestService,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1055878359447-d20b484bqgabcvnronf45c1kqf1vkji4.apps.googleusercontent.com'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('469107014221930'),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
