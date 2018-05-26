import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WordCloudComponent } from './word-cloud.component';

describe('WordCloudComponent', () => {
  let component: WordCloudComponent;
  let fixture: ComponentFixture<WordCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudComponent);
    component = fixture.componentInstance;
    component.words = ["first", "second", "third"]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set first word correctly', ()=>{
    let firstWordEl =  fixture.debugElement.query(By.css('#yellow text'));
    console.log(firstWordEl);
    expect(firstWordEl.nativeElement.innerHTML).toContain("first")
  } );

  it('should set first word correctly', ()=>{
    let secondWordEl =  fixture.debugElement.query(By.css('#blue text'));
    console.log(secondWordEl);
    expect(secondWordEl.nativeElement.innerHTML).toContain("second")
  } );

  it('should set first word correctly', ()=>{
    let thirdWordEl =  fixture.debugElement.query(By.css('#red text'));
    console.log(thirdWordEl);
    expect(thirdWordEl.nativeElement.innerHTML).toContain("third")
  } );


});
