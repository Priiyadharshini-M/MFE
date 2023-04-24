import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectFeatureService } from '../project-feature.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  public projectForm !: FormGroup ;
  
  constructor(private formBuilder: FormBuilder, private projectService: ProjectFeatureService, private router: Router) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      projectID: ['', Validators.required],
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(25)]],
    });
  }

  get projectID() {return this.projectForm.get('projectID')}
  get projectName() { return this.projectForm.get('projectName')}
  get description() {return this.projectForm.get('description')}

  onSubmit() {
    this.projectService.addNewProject(this.projectForm.value).subscribe(res =>{
      console.log("res",res);
    })
    this.router.navigate(['project'])
  }
}
