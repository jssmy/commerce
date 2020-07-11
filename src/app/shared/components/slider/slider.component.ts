import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Islider } from '../../commons/interfaces/islider';
enum SLIDER_STATE {
  ACTIVE = 'seq-in',
  INACTIVE = 'seq-out'
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input ('imgs') imgs: string[];
  sliderContent: Islider[] = [];
  @Input('timer') transition: number;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.transition =  this.transition ? this.transition : 3;
    this.default();
    this.moving();
  }

  default() {
    let index = 0;
    for(const item of this.imgs) {
      index++;
      this.sliderContent.push({
        title: `SAVE UP TO 75% OFFJEANS COLLECTION X ${index}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.',
        image: item,
        state: SLIDER_STATE.INACTIVE,
        button: {
          text: 'SHOW NOW',
          href: "#"
        }
      });
    }
    this.sliderContent[0].state = SLIDER_STATE.ACTIVE;
  }

  moving() {
    setInterval(() => {
      this.next();
    }, this.transition * 1000);
  }

  next() {
    const current_slide = this.sliderContent.find( x => x.state === SLIDER_STATE.ACTIVE);
    let current_index = this.sliderContent.indexOf(current_slide);
    const max: number = this.sliderContent.length - 1; 
    let next = current_index + 1;
    if(current_index === max) next = 0;
    current_slide.state = SLIDER_STATE.INACTIVE;
    this.sliderContent[next].state = SLIDER_STATE.ACTIVE;
  }

  prev(){
    const current_slide = this.sliderContent.find( x => x.state === SLIDER_STATE.ACTIVE);
    let current_index = this.sliderContent.indexOf(current_slide);
    const min: number = 0; 
    let prev = current_index - 1;
    if(current_index <= min) prev = this.sliderContent.length - 1;
    current_slide.state = SLIDER_STATE.INACTIVE;
    this.sliderContent[prev].state = SLIDER_STATE.ACTIVE;
  
  
  }

}
