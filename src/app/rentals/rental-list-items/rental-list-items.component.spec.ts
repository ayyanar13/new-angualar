import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalListItemsComponent } from './rental-list-items.component';

describe('RentalListItemsComponent', () => {
  let component: RentalListItemsComponent;
  let fixture: ComponentFixture<RentalListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
