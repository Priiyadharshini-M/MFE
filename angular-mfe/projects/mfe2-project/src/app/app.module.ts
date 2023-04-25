import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
