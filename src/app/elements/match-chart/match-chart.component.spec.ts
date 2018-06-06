import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';

import { MatchChartComponent } from './match-chart.component';

describe('MatchChartComponent', () => {
  let component: MatchChartComponent;
  let fixture: ComponentFixture<MatchChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchChartComponent ],
      imports: [ChartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
