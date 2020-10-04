import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoaderService } from './shared/commons/interceptors/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestService } from './shared/commons/interceptors/request.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
