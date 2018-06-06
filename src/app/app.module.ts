import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';

import { SentimentToEmojiService } from './services/sentiment-to-emoji.service'

import { AppComponent } from './app.component';
import { DashboardComponent } from './elements/dashboard/dashboard.component';
import { DayDetailComponent } from './elements/day-detail/day-detail.component';
import { WordCloudComponent } from './elements/word-cloud/word-cloud.component';
import { MatchChartComponent } from './elements/match-chart/match-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DayDetailComponent,
    WordCloudComponent,
    MatchChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [SentimentToEmojiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
