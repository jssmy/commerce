import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCatalogComponent } from './head-catalog.component';

describe('HeadCatalogComponent', () => {
  let component: HeadCatalogComponent;
  let fixture: ComponentFixture<HeadCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
