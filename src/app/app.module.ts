import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { EmployeeAddComponent } from './employeeadd/employeeadd.component';
import { DataService } from './data.service';
import { EmployeeDeleteComponent } from './employeedelete/employeedelete.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
