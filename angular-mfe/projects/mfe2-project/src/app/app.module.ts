import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectFeatureModule } from './project-feature/project-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports:[AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectFeatureModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
