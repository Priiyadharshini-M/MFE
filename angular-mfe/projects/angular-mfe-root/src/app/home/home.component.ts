import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isClicked : boolean = false
  activeButton : any 
  constructor(private router: Router) {}
  goEmployee() {
    console.log('entered');
    this.router.navigate(['employee']);
  }
  goProject() {
    this.router.navigate(['project'])
  }
 setActive(buttonName: string) {
    this.activeButton = buttonName;
  }
  isActive(buttonName: string) {
    return this.activeButton === buttonName;
  }

}
