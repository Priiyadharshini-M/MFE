import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeFeatureRoutingModule } from './employee-feature-routing.module';
import { EmployeeFeatureComponent } from './employee-feature.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    EmployeeFeatureComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeFeatureRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService]
})
export class EmployeeFeatureModule { }
