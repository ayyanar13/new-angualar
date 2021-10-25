import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetalDetailsBookingComponent } from './retal-details-booking.component';

describe('RetalDetailsBookingComponent', () => {
  let component: RetalDetailsBookingComponent;
  let fixture: ComponentFixture<RetalDetailsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetalDetailsBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetalDetailsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
