// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-annotable-line-chart',
//   templateUrl: './annotable-line-chart.component.html',
//   styleUrls: ['./annotable-line-chart.component.scss']
// })
// export class AnnotableLineChartComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }





import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  HostListener,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { scaleLinear, scaleTime, scalePoint } from 'd3-scale';
import { curveLinear } from 'd3-shape';

import { calculateViewDimensions, ViewDimensions } from '@swimlane/ngx-charts/release/common/view-dimensions.helper';
import { ColorHelper } from '@swimlane/ngx-charts/release/common/color.helper';
import { BaseChartComponent } from '@swimlane/ngx-charts/release/common/base-chart.component';
import { id } from '@swimlane/ngx-charts/release/utils/id';
import { getUniqueXDomainValues } from '@swimlane/ngx-charts/release/common/domain.helper';
import { LineChartComponent } from '@swimlane/ngx-charts/release/line-chart';

@Component({
  selector: 'ngx-charts-sparkline',
  templateUrl: './annotable-line-chart.component.html',
  styleUrls: ['base-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate(500, style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AnnotableLineChartComponent extends LineChartComponent {
 @Input() annotations: any[];
 rDomain = [1,1];
 rScale = this.getRScale(this.rDomain, [3, 30]);

  getRScale(domain, range): any {
    const scale = scaleLinear()
      .range(range)
      .domain(domain);

    return this.roundDomains ? scale.nice() : scale;
  }



}

