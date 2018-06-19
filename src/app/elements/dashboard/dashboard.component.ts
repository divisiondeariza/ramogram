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


  data:DayData[]; 
  
  getWeekday(date){
    return moment(date).tz('UTC').format("dddd").toUpperCase();
  }

  private getEmojiUrl(sentiment){
    let emojiFilename = this.sentimentToEmojiService.getEmoji(sentiment);
    return 'assets/img/emojis/' + emojiFilename;
  }
  ngOnInit() {


  this.dataService.getData()
    .subscribe(data => this.data = data);
  

  }

}
