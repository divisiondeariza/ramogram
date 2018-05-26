import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {
  @Input() words: string[];

  constructor() { }

  ngOnInit() {
  }

}
