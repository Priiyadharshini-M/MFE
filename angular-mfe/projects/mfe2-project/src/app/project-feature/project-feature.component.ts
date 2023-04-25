import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { ProjectFeatureService } from './project-feature.service';
// import { getAllProjectDetails } from './state/project.action';
import { getAllProjectDetails } from 'projects/ngrx/src/public-api';

@Component({
  selector: 'app-project-feature',
  templateUrl: './project-feature.component.html',
  styleUrls: ['./project-feature.component.css']
})
export class ProjectFeatureComponent implements OnInit {
  projects !: Observable<any>
  employees !: Observable<any>
  assignedProjects !: Observable<any>
  projectEmployeeDetails !: Observable<any>
  constructor(private projectService: ProjectFeatureService, private router: Router, private store : Store<{ assignedProd : {assignedProjects : any}}>) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
    this.employees = this.projectService.getEmployee()
    this.assignedProjects = this.projectService.getAssignedProjects()
    this.projectEmployeeDetails = combineLatest([this.projects, this.employees, this.assignedProjects]).pipe(
      map(([project, employee, assignedProj]) => {
        return assignedProj.map((asp: any) => {
          return {
            ...asp,
            projectDetail : project.find((proj: any) => proj.id === asp.projectId),
            employeeDetail : employee.find((emp : any) => emp.id === asp.employeeId)
          }
        })
      })
    );
    this.store.dispatch(getAllProjectDetails({ value: this.projectEmployeeDetails}));
  }

  addProject() {
    this.router.navigate(['/project/add']);
  }
  assign(projectId: any) {
    this.router.navigate(['/project/assign/'+projectId]);
  }
  fullDetails() {
    this.router.navigate(['/project/employee-project-details']);
  }
}
