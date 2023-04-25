import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { EmployeeProjectDetailsComponent } from './employee-project-details/employee-project-details.component';
import { ProjectFeatureRoutingModule } from './project-feature-routing.module';
import { ProjectFeatureComponent } from './project-feature.component';
import { ProjectFeatureService } from './project-feature.service';
import { assignedProjectReducer } from 'projects/ngrx/src/public-api';


@NgModule({
  declarations: [
    ProjectFeatureComponent,
    AddProjectComponent,
    AssignProjectComponent,
    EmployeeProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectFeatureRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('assignedProd', assignedProjectReducer),
    EffectsModule.forFeature([])
  ],
  providers: [ProjectFeatureService]
})
export class ProjectFeatureModule { }
