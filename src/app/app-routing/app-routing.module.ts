import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from '.././employee-list/employee-list.component';

import { EmployeeComponent } from 
'.././employee/employee.component';

import { WidgetComponent } from '.././widget/widget.component';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:code', component: EmployeeComponent },
  { path:'widget', component : WidgetComponent},
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }