import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'employee',loadChildren:()=> import('./employee-feature/employee-feature.module')
  .then(m => {
    console.log('loo', m);
    return m.EmployeeFeatureModule
  })
  .catch( err => {
    console.log('erroo', err);
    return err })}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
