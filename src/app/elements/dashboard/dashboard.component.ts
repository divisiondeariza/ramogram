import { Component, OnInit, Input } from '@angular/core';
import { DayData } from '../../classes/day-data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  dayData:DayData; // TEMPORARY
  

  ngOnInit() {
  	this.dayData = {
                "date": "2018-06-14", // Thursday
                "sentiment": -1,
                "character": "James Rodríguez",
                "adjectives": [
                  "buena",
                  "bonita",
                  "barata"
                ],
                "match_data": {
                  "title": "Colombia vs. Polonia",
                  "times": ["07:00", "07:05"],
                  "sentiment": [0.1, 0.4],
                  "key_times": {
                    "first_half": "07:30",
                    "second_half": "8:30"
                  }
                }
              };
  }

}
