import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ScheduleModule, ResourceDirective, ResourcesDirective } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ScheduleModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [ResourceDirective, ResourcesDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
