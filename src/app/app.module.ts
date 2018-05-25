import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './elements/dashboard/dashboard.component';
import { DayDetailComponent } from './elements/day-detail/day-detail.component';
import { WordCloudComponent } from './elements/word-cloud/word-cloud.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DayDetailComponent,
    WordCloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
