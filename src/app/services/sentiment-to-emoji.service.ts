import { Injectable } from '@angular/core';

@Injectable()
export class SentimentToEmojiService {

  constructor() { }

  public getEmoji(sentiment){
  	if(sentiment < -0.6)
  		return "very-sad.png";
  	if(sentiment < -0.2)
  		return "sad.png";
	if(sentiment < 0.2)
  		return "neutral.png";
	if(sentiment < 0.6)
  		return "happy.png";
  	return "very-happy.png"

  }

}
