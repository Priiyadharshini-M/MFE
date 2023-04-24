import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'project',loadChildren:()=> import('./project-feature/project-feature.module')
  .then(m => {
    return m.ProjectFeatureModule
  })
  .catch( err => {
    return err })}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
