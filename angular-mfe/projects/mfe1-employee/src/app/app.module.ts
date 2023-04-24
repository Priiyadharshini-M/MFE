import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFeatureModule } from './employee-feature/employee-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeFeatureModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
