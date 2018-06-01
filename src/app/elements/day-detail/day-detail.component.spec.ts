import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { DayDetailComponent } from './day-detail.component';
import { DayData } from '../../classes/day-data'

import { Input, Output, EventEmitter, DebugElement, Component } from '@angular/core';


@Component({selector: 'app-word-cloud', template: ''})
class WordCloudStubCmp {
  @Input() words: string[];
}

describe('DayDetailComponent', () => {
  let component: DayDetailComponent;
  let fixture: ComponentFixture<DayDetailComponent>;
  let dayData:DayData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayDetailComponent, WordCloudStubCmp ]
    })
    .compileComponents();
  }));

  describe("no match case", () =>{
    beforeEach(() => {
      dayData = {
                "date": "2018-06-14",
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

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set words correctly', ()=>{
      let WordCloudEl =  fixture.debugElement.query(By.css('app-word-cloud'));
      expect(WordCloudEl.componentInstance.words).toEqual(dayData.adjectives);
    })

  })

});
