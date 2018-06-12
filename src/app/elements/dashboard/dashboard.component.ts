import { Component, OnInit, Input } from '@angular/core';
import { DayData } from '../../classes/day-data'
import { SentimentToEmojiService } from '../../services/sentiment-to-emoji.service'
import { DataService } from '../../services/data.service'
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private sentimentToEmojiService:SentimentToEmojiService,
    private dataService:DataService      ) { }

  dayData:DayData; // TEMPORARY
  data:DayData[]; // TEMPORARY
  data2:DayData[]
  
  getWeekday(date){
    return moment(date).tz('UTC').format("dddd").toUpperCase();
  }

  private getEmojiUrl(sentiment){
    let emojiFilename = this.sentimentToEmojiService.getEmoji(sentiment);
    return 'assets/img/emojis/' + emojiFilename;
  }
  ngOnInit() {

    this.data = [
      {
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
          "times": ["07:00", "07:05", "07:30", "07:35", "8:30", "8:40"],
          "sentiment": [0.1, 0.4, -0.8, -0.5, 0.2, 0.5],
          "key_times": {
            "first_half": "07:30",
            "second_half": "8:30"
          }
        }
      },
    {
      "date": "2018-06-15",
      "sentiment": -0.5,
      "character": "Radamel Falcao",
      "adjectives": [
        "buena",
        "bonita",
        "barata"
      ]
    },
    {
      "date": "2018-06-16",
      "sentiment": 1,
      "character": "Santiago Arias",
      "adjectives": [
        "buena",
        "bonita",
        "barata"
      ]
    },
    {
      "date": "2018-06-17",
      "sentiment": -1,
      "character": "Santiago Arias",
      "adjectives": [
        "buena",
        "bonita",
        "barata"
      ]
    },
    {
      "date": "2018-06-18",
      "sentiment": 0.5,
      "character": "James Rodríguez",
      "adjectives": [
        "buena",
        "bonita",
        "barata"
      ]
    },
    {
      "date": "2018-06-19",
      "sentiment": 0,
      "character": "Radamel Falcao",
      "adjectives": [
        "buena",
        "bonita",
        "barata"
      ]
    },
    {
      "date": "2018-06-20",
      "sentiment": 1,
      "character": "James Rodríguez",
      "adjectives": [
        "buena",
        "bonita",
        "barata"
      ]
    }
  ]

  // this.dataService.getData()
  //   .subscribe(data => this.data = data);
  // }

}


