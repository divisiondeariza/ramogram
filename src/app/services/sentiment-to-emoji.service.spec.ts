import { TestBed, inject } from '@angular/core/testing';

import { SentimentToEmojiService } from './sentiment-to-emoji.service';

describe('SentimentToEmojiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentimentToEmojiService]
    });
  });

  it('should be created', inject([SentimentToEmojiService], (service: SentimentToEmojiService) => {
    expect(service).toBeTruthy();
  }));

  it('should get very-sad image for sentiment in interval [-1, -0.6)', inject([SentimentToEmojiService], (service: SentimentToEmojiService) => {
    expect(service.getEmoji(-1)).toEqual("very-sad.png");
    expect(service.getEmoji(-0.8)).toEqual("very-sad.png");
    expect(service.getEmoji(-0.6)).not.toEqual("very-sad.png");
  }));

  it('should get sad image for sentiment in interval [-0.6, -0.2)', inject([SentimentToEmojiService], (service: SentimentToEmojiService) => {
    expect(service.getEmoji(-0.6)).toEqual("sad.png");
    expect(service.getEmoji(-0.4)).toEqual("sad.png");
    expect(service.getEmoji(-0.2)).not.toEqual("sad.png");
  }));

  it('should get neutral image for sentiment in interval [-0.2, 0.2)', inject([SentimentToEmojiService], (service: SentimentToEmojiService) => {
    expect(service.getEmoji(-0.2)).toEqual("neutral.png");
    expect(service.getEmoji(0)).toEqual("neutral.png");
    expect(service.getEmoji(0.2)).not.toEqual("neutral.png");
  }));

  it('should get happy image for sentiment in interval [0.2, 0.6)', inject([SentimentToEmojiService], (service: SentimentToEmojiService) => {
    expect(service.getEmoji(0.2)).toEqual("happy.png");
    expect(service.getEmoji(0.4)).toEqual("happy.png");
    expect(service.getEmoji(0.6)).not.toEqual("happy.png");
  }));

  it('should get very-happy image for sentiment in interval [0.6, 1]', inject([SentimentToEmojiService], (service: SentimentToEmojiService) => {
    expect(service.getEmoji(0.6)).toEqual("very-happy.png");
    expect(service.getEmoji(0.8)).toEqual("very-happy.png");
    expect(service.getEmoji(1)).toEqual("very-happy.png");
  }));

});
