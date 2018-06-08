import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from '../../classes/match-data'
import * as Chart from '../../../../node_modules/chart.js/dist/Chart.js';
import * as ChartDatalabels from'../../../../node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js';
import * as ChartAnnotation from'../../../../node_modules/chartjs-plugin-annotation/chartjs-plugin-annotation.js';

@Component({
  selector: 'app-match-chart',
  templateUrl: './match-chart.component.html',
  styleUrls: ['./match-chart.component.scss']
})
export class MatchChartComponent implements OnInit {
  @Input() matchData: MatchData;
  
  single: any[];
  highlights

  multi: any[] = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      },
      {
        "name": "2012",
        "value": 7300000
      },
      {
        "name": "2013",
        "value": 8940000
      },

    ]
  }];

	activeEntries:any[] = [];
	onActivateAndDeactivate() { // keep the highlights on all the time
	this.activeEntries = [
		{name: "2011", value: 8940000, series: "Germany"}
	  ];
	  console.log("meh");
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
  
  constructor() {
  }
  
  onSelect(event) {
  	this.activeEntries.push({name: "2011", value: 8940000, series: "Germany"});
  	console.log(this.activeEntries)
  }

  ngOnInit() {
  }

}
