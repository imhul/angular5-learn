// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Preloading Strategies
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

// Modules
import { AdminModule } from './admin/admin.module';

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
import { FormComponent } from './users/login/form/form.component';
import { FormArrayComponent } from './users/form-array/form-array.component';
import { FormBuilderComponent } from './users/form-builder/form-builder.component';
import { CustomControlComponent } from './users/custom-control/custom-control.component';
import { CustomControlViewComponent } from './users/custom-control/custom-control-view/custom-control-view.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsIntroComponent } from './rxjs/rxjs-intro/rxjs-intro.component';
import { FabricComponent } from './rxjs/fabric/fabric.component';
import { FiltersComponent } from './rxjs/filters/filters.component';
import { UnionComponent } from './rxjs/union/union.component';
import { TransformComponent } from './rxjs/transform/transform.component';
import { ErrorsComponent } from './rxjs/errors/errors.component';
import { UtilsComponent } from './rxjs/utils/utils.component';

// Services
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { UserMiddleware } from './services/middleware/user-middleware.service';
import { RxjsService } from './services/rxjs/rxjs.service';

// Routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'admin', 
    loadChildren: './admin/admin.module#AdminModule',
    data: { preload: true, delay: true },
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
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: 'custom-control',
    component: CustomControlViewComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
];

// Main module
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
    FormComponent,
    FormArrayComponent,
    FormBuilderComponent,
    CustomControlComponent,
    CustomControlViewComponent,
    RxjsComponent,
    RxjsIntroComponent,
    FabricComponent,
    FiltersComponent,
    UnionComponent,
    TransformComponent,
    ErrorsComponent,
    UtilsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: CustomPreloadingStrategy,
        /* useHash: true */ 
      },
    ),
    FormsModule,
    ReactiveFormsModule,
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
    CustomPreloadingStrategy,
    RxjsService,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
