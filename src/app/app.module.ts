import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsModule } from './planets/planets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppErrorHandler } from '@app/services/errorhandler.service';
import { planetIdResolver } from '@app/planets/planet/planetidresolver';
import { registerLocaleData } from '@angular/common';
import localeDa from '@angular/common/locales/da';
registerLocaleData(localeDa, 'da');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
    }),
    PlanetsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    planetIdResolver
  ]
})
export class AppModule { }
