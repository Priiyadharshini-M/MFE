import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { EmployeeProjectDetailsComponent } from './employee-project-details/employee-project-details.component';
import { ProjectFeatureComponent } from './project-feature.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'mfe2',
    pathMatch:'full'
  },
  {
    path:'mfe2',
    component:ProjectFeatureComponent
  },
  {
    path:'add',
    component:AddProjectComponent
  },
  {
    path:'assign/:projectId',
    component:AssignProjectComponent
  },
  {
    path:'employee-project-details',
    component:EmployeeProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFeatureRoutingModule { }
