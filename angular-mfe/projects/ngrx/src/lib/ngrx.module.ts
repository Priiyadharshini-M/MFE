import { NgModule } from '@angular/core';
import { NgrxComponent } from './ngrx.component';
import { StoreModule } from '@ngrx/store';
import { assignedProjectReducer } from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    NgrxComponent
  ],
  imports: [
    StoreModule.forFeature('assignedProd', assignedProjectReducer),
    EffectsModule.forFeature([])
  ],
  exports: [
    NgrxComponent
  ]
})
export class NgrxModule { }
