import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveldetailComponent } from './traveldetail.component';

describe('TraveldetailComponent', () => {
  let component: TraveldetailComponent;
  let fixture: ComponentFixture<TraveldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraveldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
