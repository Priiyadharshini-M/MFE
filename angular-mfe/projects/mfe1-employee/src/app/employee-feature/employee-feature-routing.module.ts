import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeFeatureComponent } from './employee-feature.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'mfe1',
    pathMatch:'full'
  },
  {
    path:'mfe1',
    component:EmployeeFeatureComponent,
  },
  {
    path:'add',
    component:AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeFeatureRoutingModule { }
