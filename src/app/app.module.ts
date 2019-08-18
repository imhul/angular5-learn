import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { UserMiddleware } from './services/middleware/user-middleware.service';
import { UserCardComponent } from './header/user-card/user-card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserMiddleware,
      multi: true,
    },
    UserService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
