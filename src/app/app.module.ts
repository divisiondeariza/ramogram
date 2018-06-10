import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';

import { SentimentToEmojiService } from './services/sentiment-to-emoji.service'

import { AppComponent } from './app.component';
import { DashboardComponent } from './elements/dashboard/dashboard.component';
import { DayDetailComponent } from './elements/day-detail/day-detail.component';
import { WordCloudComponent } from './elements/word-cloud/word-cloud.component';
import { MatchChartComponent } from './elements/match-chart/match-chart.component';
import { AnnotableLineChartComponent } from './elements/annotable-line-chart/annotable-line-chart.component';
import { AnnotationsComponent } from './elements/annotations/annotations.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DayDetailComponent,
    WordCloudComponent,
    MatchChartComponent,
    AnnotableLineChartComponent,
    AnnotationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [SentimentToEmojiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
