import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProjectFeatureService } from '../project-feature.service';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent {
  public projectAssignForm !: FormGroup;
  public projId : any
  public isDisabled : boolean = true

  constructor(private formBuilder: FormBuilder, private projectService: ProjectFeatureService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.projId = parseInt(params.get('projectId') || '')
    })
    this.projectAssignForm = this.formBuilder.group({
      projectId: [this.projId],
      employeeId: ['', Validators.required]
    });
    this.projectAssignForm.get('projectId')?.disable();
  }

  get employeeId() {return this.projectAssignForm.get('employeeID')}

  onSubmit() {
    console.log('valuee', this.projectAssignForm.getRawValue());
    this.projectService.assignProjects(this.projectAssignForm.getRawValue()).subscribe(res => {
      console.log('assigned res', res);
    })
    this.router.navigate(['project']);
  }
}
