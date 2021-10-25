import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-retal-details-booking',
  templateUrl: './retal-details-booking.component.html',
  styleUrls: ['./retal-details-booking.component.scss']
})
export class RetalDetailsBookingComponent implements OnInit {
  
@Input() price:number | undefined
daterange: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };
 
  public selectedDate(value: any, datepicker?: any) {
    console.log(value);
 
    datepicker.start = value.start;
    datepicker.end = value.end; 
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
}
