// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-annotations',
//   templateUrl: './annotations.component.html',
//   styleUrls: ['./annotations.component.scss']
// })
// export class AnnotationsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {
  Component,
  Input,
  Output,
  SimpleChanges,
  EventEmitter,
  OnChanges,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { formatLabel } from '@swimlane/ngx-charts/release/common/label.helper';
import { id } from '@swimlane/ngx-charts/release/utils/id';
import { ColorHelper } from '@swimlane/ngx-charts/release/common/';
import { CircleSeriesComponent } from '@swimlane/ngx-charts/release/common/circle-series.component';

@Component({
  selector: 'g[app-annotations]',
  templateUrl: './annotations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(250, style({opacity: 1}))
      ])
    ])
  ]
})
export class AnnotationsComponent extends CircleSeriesComponent {


}