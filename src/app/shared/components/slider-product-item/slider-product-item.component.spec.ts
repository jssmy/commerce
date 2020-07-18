import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductItemComponent } from './slider-product-item.component';

describe('SliderProductItemComponent', () => {
  let component: SliderProductItemComponent;
  let fixture: ComponentFixture<SliderProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
