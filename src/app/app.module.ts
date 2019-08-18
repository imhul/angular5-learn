// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserComponent } from './users/user/user.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SettingsComponent } from './users/settings/settings.component';
import { LoginComponent } from './users/login/login.component';
import { AdminComponent } from './admin/admin.component';

// Services
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { UserMiddleware } from './services/middleware/user-middleware.service';

// Routes
const routes = [
  {path: '', component: HomeComponent},
  {
    path: 'admin', 
    component: AdminComponent,
    loadChildren: './admin/admin.module#AdminComponent',
  },
  {
    path: 'login', 
    component: LoginComponent, 
    outlet: "popup"
  },
  {
    path: 'users', 
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Users'
    }
  },
  {
    path: 'users/:userId', 
    component: UserComponent, 
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
    ]
  },
];

// Module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    UserCardComponent,
    UserComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    MenuComponent,
    AdminComponent,
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
    AuthGuard,
    AuthService,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
