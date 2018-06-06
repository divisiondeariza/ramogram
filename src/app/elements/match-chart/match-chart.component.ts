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
  
  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['Enero', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public lineChartOptions = {
  	plugins: {
            datalabels: {
                formatter: function(value, context) {
                	if(context.dataIndex % 2 == 1)
                		return value
                    return '';
                }

  		}
	  },
	annotation: {
        drawTime: 'afterDatasetsDraw', // (default)
 
        // Mouse events to enable on each annotation.
        // Should be an array of one or more browser-supported mouse events
        // See https://developer.mozilla.org/en-US/docs/Web/Events
        events: ['click'],
 
        // Double-click speed in ms used to distinguish single-clicks from 
        // double-clicks whenever you need to capture both. When listening for
        // both click and dblclick, click events will be delayed by this
        // amount.
        dblClickSpeed: 350, // ms (default)
	   annotations: [{
	      type: 'line',
	      id: 'hLine',
	      mode: 'horizontal',
	      scaleID: 'y-axis-0',
	      value: 3,  // data-value at which the line is drawn
	      borderWidth: 2,
	      borderColor: 'black'
	   },
          {
            drawTime: "afterDatasetsDraw",
            id: "hline",
            type: "line",
            mode: "horizontal",
            scaleID: "y-axis-0",
            value: 50,
            borderColor: "black",
            borderWidth: 5,
            label: {
              backgroundColor: "red",
              content: "Test Label",
              enabled: true
            },
            onClick: function(e) {
              // The annotation is is bound to the `this` variable
              console.log("Annotation", e.type, this);
            }
          },
			{
	            drawTime: 'afterDraw', // overrides annotation.drawTime if set
	            id: 'a-line-1', // optional
	            type: 'line',
	            mode: 'horizontal',
	            scaleID: 'y-axis-0',
	            value: '25',
	            borderColor: 'red',
	            borderWidth: 2,
	 
	            // Fires when the user clicks this annotation on the chart
	            // (be sure to enable the event in the events array below).
	            onClick: function(e) {
	                // `this` is bound to the annotation element
	            }
       	 }
		]
	}
	}

  
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



  constructor() { } 

  ngOnInit() {
  	Chart.pluginService.register(ChartDatalabels);
  	Chart.pluginService.register(ChartAnnotation);
  }

}
