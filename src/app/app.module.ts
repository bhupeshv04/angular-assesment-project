import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeService } from './Services/employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, EmployeeComponent, WidgetComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
