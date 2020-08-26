import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadigItemComponent } from './loading-item.component';

describe('LoadigItemComponent', () => {
  let component: LoadigItemComponent;
  let fixture: ComponentFixture<LoadigItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadigItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadigItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
