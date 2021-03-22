import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './organization/search/search.component';
import { EmployeeComponent} from './organization/employee/employee.component';
import { DepartmentComponent} from './organization/department/department.component';
import { DepartmentDataService } from './services/department-data.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, SearchComponent, EmployeeComponent, DepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [DataService, DepartmentDataService],
  exports: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
