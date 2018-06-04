import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { DayDetailComponent } from './day-detail.component';
import { DayData } from '../../classes/day-data'
import { SentimentToEmojiService } from '../../services/sentiment-to-emoji.service'


import { Input, Output, EventEmitter, DebugElement, Component } from '@angular/core';


@Component({selector: 'app-word-cloud', template: ''})
class WordCloudStubCmp {
  @Input() words: string[];
}

describe('DayDetailComponent', () => {
  let component: DayDetailComponent;
  let fixture: ComponentFixture<DayDetailComponent>;
  let dayData:DayData;
  let getEmojiSpy: jasmine.Spy;

  beforeEach(async(() => {
    const sentimentToEmojiService = jasmine.createSpyObj('SentimentToEmojiService', ['getEmoji']);
    getEmojiSpy = sentimentToEmojiService.getEmoji.and.returnValue("some-emoji.png")
    TestBed.configureTestingModule({
      declarations: [ DayDetailComponent, WordCloudStubCmp ],
      providers: [ {provide: SentimentToEmojiService, useValue: sentimentToEmojiService} ]
    })
    .compileComponents();
  }));

  describe("no match case", () =>{
    beforeEach(() => {
      dayData = {
                "date": "2018-06-14", // Thursday
                "sentiment": -1,
                "character": "James Rodríguez",
                "adjectives": [
                  "buena",
                  "bonita",
                  "barata"
                ]
              };
      fixture = TestBed.createComponent(DayDetailComponent);
      component = fixture.componentInstance;
      component.data = dayData;
      fixture.detectChanges();
    });

    it('should set words correctly', ()=>{
      let WordCloudEl =  fixture.debugElement.query(By.css('app-word-cloud'));
      expect(WordCloudEl.componentInstance.words).toEqual(dayData.adjectives);
    });

    it('should set emoji correctly', ()=>{
      let FeelingEl = fixture.debugElement.query(By.css('#feeling img'));
      expect(FeelingEl.nativeElement.attributes.src.nodeValue).toEqual("assets/img/emojis/" + getEmojiSpy());
    });

    it("Should call getEmojiCorrectly", ()=>{
      expect(getEmojiSpy).toHaveBeenCalledWith(dayData.sentiment);
      expect(getEmojiSpy).toHaveBeenCalledTimes(1);

    });

    it("Should set date correctly", ()=>{
      let dateEl = fixture.debugElement.query(By.css('#date'));
      let weekdayEl = fixture.debugElement.query(By.css('#date b'));
      expect(dateEl.nativeElement.innerText).toEqual("JUEVES 14 de junio");
      expect(weekdayEl.nativeElement.innerText).toEqual("JUEVES");
    });
  });

  describe("match past", () =>{
    beforeEach(() => {
      dayData = {
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
      fixture = TestBed.createComponent(DayDetailComponent);
      component = fixture.componentInstance;
      component.data = dayData;
      fixture.detectChanges();
    });

    it("should set title correctly", ()=>{
      let titleEl = fixture.debugElement.query(By.css('#match h2'));
      expect(titleEl.nativeElement.innerText).toEqual(dayData.match_data.title);
    });

  });

});
