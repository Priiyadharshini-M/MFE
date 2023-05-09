import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"employee",
    loadChildren: ()=>
    loadRemoteModule({
      type:'module',
      remoteEntry:"http://localhost:4202/remoteEntry.js",
      exposedModule:'./Module'
    }).then(m=> {
      console.log('hel',m);
      return m.EmployeeFeatureModule})
      .catch( err => {
        console.log('Oh no!', err)
      return err} )
  },
  {
    path:"project",
    loadChildren: ()=>
    loadRemoteModule({
      type:'module',
      remoteEntry:"http://localhost:4203/remoteEntry.js",
      exposedModule:'./Module'
    }).then(m=> {
      console.log('helll',m);
      return m.ProjectFeatureModule})
      .catch( err => {
        console.log('Oh no!', err)
      return err} )
  },
  // {
  //   path:"home",
  //   component:HomeComponent
  // },
  {
    path:'scheduler',
    component:SchedulerComponent
  },
  {
    path:'noone',
    component:NotFoundComponent
  },
  {
    path:'',
    redirectTo:'/project/mfe2',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
