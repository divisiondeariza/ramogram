import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDetailComponent } from './day-detail.component';
import { Input, Output, EventEmitter, DebugElement, Component } from '@angular/core';


@Component({selector: 'app-word-cloud', template: ''})
class WordCloudStubCmp {

}

describe('DayDetailComponent', () => {
  let component: DayDetailComponent;
  let fixture: ComponentFixture<DayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayDetailComponent, WordCloudStubCmp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
