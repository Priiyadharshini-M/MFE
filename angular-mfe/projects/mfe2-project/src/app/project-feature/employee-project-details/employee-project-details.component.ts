import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employee-project-details',
  templateUrl: './employee-project-details.component.html',
  styleUrls: ['./employee-project-details.component.css']
})
export class EmployeeProjectDetailsComponent implements OnInit {
  assignedProd : any
  constructor(private store: Store<{ assignedProd : {assignedProjects : any}}>) {}

  ngOnInit(): void {
    this.store.select('assignedProd').subscribe(data => {
      // console.log('data in employee project details..',data.assignedProjects.subscribe((d: any) => {
      //   console.log('ddddd', d);
      // }));
      data.assignedProjects.subscribe((details: any) => {
        console.log('employee-project-details', details);
        this.assignedProd = details;
      });
    })
  }
}
