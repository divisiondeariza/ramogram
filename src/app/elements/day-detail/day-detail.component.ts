import { Component, OnInit, Input } from '@angular/core';
import { DayData } from '../../classes/day-data'

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  @Input() data: DayData;

  constructor() { }

  ngOnInit() {
  }

}
