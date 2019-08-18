import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserService } from './services/user/user.service';
import { UserMiddleware } from './services/middleware/user-middleware.service';

// Routes
const routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
];

// Module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(routes/*, {useHash: true} */),
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
