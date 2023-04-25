import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeFeatureRoutingModule } from './employee-feature-routing.module';
import { EmployeeFeatureComponent } from './employee-feature.component';
import { EmployeeService } from './employee.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { assignedProjectReducer } from 'projects/ngrx/src/public-api';


@NgModule({
  declarations: [
    EmployeeFeatureComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeFeatureRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('assignedProd', assignedProjectReducer),
    EffectsModule.forFeature([])
  ],
  providers: [EmployeeService]
})
export class EmployeeFeatureModule { }
