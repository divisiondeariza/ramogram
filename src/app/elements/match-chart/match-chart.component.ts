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
  multi: any[] = 
[
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 40633
      },
      {
        "name": "2000",
        "value": 36953
      },
      {
        "name": "1990",
        "value": 31476
      }
    ]
  },
  {
    "name": "United States",
    "series": [
      {
        "name": "2010",
        "value": 49737
      },
      {
        "name": "2000",
        "value": 45986
      },
      {
        "name": "1990",
        "value": 37060
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 36745
      },
      {
        "name": "2000",
        "value": 34774
      },
      {
        "name": "1990",
        "value": 29476
      }
    ]
  },
  {
    "name": "United Kingdom",
    "series": [
      {
        "name": "2010",
        "value": 36240
      },
      {
        "name": "2000",
        "value": 32543
      },
      {
        "name": "1990",
        "value": 26424
      }
    ]
  }
];

  multi2: any[] = 
[
  {
    "name": "German",
    "series": [
      {
        "name": "2010",
        "value": 40632
      },
      {
        "name": "2000",
        "value": 36953
      },
      {
        "name": "1990",
        "value": 35476
      }
    ]
  },
  {
    "name": "United State",
    "series": [
      {
        "name": "2010",
        "value": 49737
      },
      {
        "name": "2000",
        "value": 48986
      },
      {
        "name": "1990",
        "value": 37060
      }
    ]
  },

];

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
  
  constructor() {
  }
  
  onSelect(event) {
  	this.activeEntries.push({name: "2011", value: 8940000, series: "Germany"});
  	console.log(this.activeEntries)
  }

  ngOnInit() {
  }






}
