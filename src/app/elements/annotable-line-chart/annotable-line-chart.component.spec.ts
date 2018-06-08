import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotableLineChartComponent } from './annotable-line-chart.component';

describe('AnnotableLineChartComponent', () => {
  let component: AnnotableLineChartComponent;
  let fixture: ComponentFixture<AnnotableLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotableLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotableLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
