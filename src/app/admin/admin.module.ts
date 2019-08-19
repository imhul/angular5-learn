// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AdminComponent } from './component/admin.component';

// Routes
const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
  },
];

// Module
@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes/*, {useHash: true} */),
  ]
})
export class AdminModule { }
