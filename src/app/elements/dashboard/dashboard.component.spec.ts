import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DayData } from '../../classes/day-data'
import { DashboardComponent } from './dashboard.component';

import { Input, Output, EventEmitter, DebugElement, Component } from '@angular/core';



@Component({selector: 'app-day-detail', template: ''})
class DayDetailStubCmp {
  @Input() data:DayData;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
                      DayDetailStubCmp
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
