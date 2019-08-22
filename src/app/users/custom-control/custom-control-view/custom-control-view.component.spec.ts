import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControlViewComponent } from './custom-control-view.component';

describe('CustomControlViewComponent', () => {
  let component: CustomControlViewComponent;
  let fixture: ComponentFixture<CustomControlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomControlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
