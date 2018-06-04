import { Component, OnInit, Input } from '@angular/core';
import { DayData } from '../../classes/day-data'
import { SentimentToEmojiService } from '../../services/sentiment-to-emoji.service'


import * as moment from 'moment-timezone';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  @Input() data: DayData;
  emojiUrl:string;
  date:string;
  weekday;string;

  constructor(private sentimentToEmojiService:SentimentToEmojiService) { }

  ngOnInit() {
  	moment.locale("es");
  	this.date = moment(this.data.date).tz('UTC').format("DD [de] MMMM");
  	this.weekday = moment(this.data.date).tz('UTC').format("dddd").toUpperCase();
  	this.emojiUrl = this.getEmojiUrl();
  }

  private getEmojiUrl(){
  	let emojiFilename = this.sentimentToEmojiService.getEmoji(this.data.sentiment);
  	return 'assets/img/emojis/' + emojiFilename;
  }

  // private getDate(){
  // 	let weekday
  // 	return moment(this.data.date).tz('UTC').format("dddd DD [de] MMMM");
  // }

}
