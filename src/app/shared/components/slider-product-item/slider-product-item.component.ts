import { Component, OnInit, Input } from '@angular/core';
import { IproductItem, ISliderProductItem } from '../../commons/interfaces/iproduct-item';
import { tick } from '@angular/core/testing';
const SLIDER_BUTTON = {
  NEXT:  {
    state: ''
  },
  PREV: {
    state: 'slick-disabled'
  }
}
const SLIDER_BUTTON_STATE = {
  disabled: 'slick-disabled',
  enable: ''
}

interface IStyleListBox {
  opacity: string;
  width: string;
  left: string;
}

@Component({
  selector: 'app-slider-product-item',
  templateUrl: './slider-product-item.component.html',
  styleUrls: ['./slider-product-item.component.scss']
})
export class SliderProductItemComponent implements OnInit {
  @Input() products: IproductItem[];
  @Input() title: string;
  sliderContent: ISliderProductItem[] = [];
  BUTTON = SLIDER_BUTTON;
  styleList: IStyleListBox;
  constructor() { }
  minItem = 0;
  maxItem = 4;
  movingRang = -1224;
  ngOnInit(): void {
    this.default();
    this.title = this.title || 'Default title';
  }

  default() {
    this.styleList = {
      left: '0px',
      opacity: '1',
      width: '2448px'
    };
    let actives = 0;
     // max 16
     const maxContent = this.products.length <= 16 ? this.products.length : 16;
    for(let i =0 ; i < maxContent; i++) {
        const item = this.products[i];
        const sliderItem: ISliderProductItem = {
          categories: item.categories,
          description: item.description,
          images: item.images,
          price: item.price,
          slug: item.slug,
          state: '',
          title: item.title,
        }
        sliderItem.state = actives <= this.maxItem ? 'slick-active' : '';
        actives++;
        this.sliderContent.push(sliderItem);
    }
  }

  next () {
    if(this.BUTTON.NEXT.state === SLIDER_BUTTON_STATE.enable) {
      this.clean();
        for(let i = this.minItem + this.maxItem - 1; i < this.maxItem*2; i++) {
          const item = this.sliderContent[i];
          item.state = 'slick-active';
        }

        this.movingRight(this.movingRang);
        this.BUTTON.PREV.state = SLIDER_BUTTON_STATE.enable;
        this.BUTTON.NEXT.state = SLIDER_BUTTON_STATE.disabled;
        this.minItem = 0;
        this.maxItem = 4;
    }
  }

  private clean() {
    this.sliderContent.filter(item => {
      if(item.state === 'slick-active') {
        item.state = '';
      }
    });
  }
  movingRight(max: number) {
    const left = parseInt(this.styleList.left.replace('px', ''));
    for(let i= left; i >= max; i--) {
        setTimeout(() => {
          this.styleList.left = `${i}px` ;
        }, 100);
      
    }
  }

  movingLeft(max: number) {
    const left = parseInt(this.styleList.left.replace('px', ''));
    for(let i= left; i <= max; i++) {
      setTimeout(() => {
        this.styleList.left = `${i}px` ;
      }, 100);
      
    }
  }

  prev() {
    if(this.BUTTON.PREV.state ===  SLIDER_BUTTON_STATE.enable) {
      this.clean();
      for(let i = this.minItem; i < this.maxItem ; i++) {
        const item = this.sliderContent[i];
        item.state = 'slick-active';
      }
      this.movingLeft(0);
      this.maxItem = 4;
      this.minItem = 0;
      this.BUTTON.PREV.state = SLIDER_BUTTON_STATE.disabled;
      this.BUTTON.NEXT.state = SLIDER_BUTTON_STATE.enable;

    }
  }

}
