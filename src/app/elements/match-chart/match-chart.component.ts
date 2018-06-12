import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from '../../classes/match-data'
import * as Chart from '../../../../node_modules/chart.js/dist/Chart.js';
import * as ChartDatalabels from'../../../../node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js';
import * as ChartAnnotation from'../../../../node_modules/chartjs-plugin-annotation/chartjs-plugin-annotation.js';
import * as shape from 'd3-shape';
import {
  NgxChartsModule, BaseChartComponent, LineComponent, LineSeriesComponent,
  calculateViewDimensions, ViewDimensions, ColorHelper, BubbleChartModule
 } from '@swimlane/ngx-charts';
import { SentimentToEmojiService } from '../../services/sentiment-to-emoji.service'


@Component({
  selector: 'app-match-chart',
  templateUrl: './match-chart.component.html',
  styleUrls: ['./match-chart.component.scss']
})
export class MatchChartComponent implements OnInit {
  @Input() matchData: MatchData;
  
  single: any[];
  highlights

  curve = shape.curveLinear;
  data: any[];
  annotations: any[];

	activeEntries:any[] = [];
	onActivateAndDeactivate() { // keep the highlights on all the time
	  console.log(this.activeEntries);
	}

  // options
  showXAxis = true;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor(private sentimentToEmojiService:SentimentToEmojiService) {
  }
  
  onSelect(event) {
  	this.activeEntries.push({name: "2011", value: 8940000, series: "Germany"});
  	console.log(this.activeEntries)
  }

  ngOnInit() {
    let series = this.matchData.sentiment.map((val, i) => {return {"name": this.matchData.times[i], "value": val}})
    let annotations = series.map((val) =>{ return {"name": val.name, "value": val.value, "emoji": this.getEmojiUrl(val.value)} })
                            .filter(val => this.matchData.key_times.first_half == val.name || this.matchData.key_times.second_half == val.name )
    this.data = [{"name":"", series: series}]
    this.annotations = [{"name":"", series: annotations}]


  }

  private getEmojiUrl(sentiment){
    let emojiFilename = this.sentimentToEmojiService.getEmoji(sentiment);
    return 'assets/img/emojis/' + emojiFilename;
  }




}
