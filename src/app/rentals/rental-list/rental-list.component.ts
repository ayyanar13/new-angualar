import { Component, OnInit } from '@angular/core';
import { rentalservice } from "../shared/rental.service";

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [];

  constructor(private Rentalservice: rentalservice) { }

  ngOnInit(): void {
   const rentalobservable=this.Rentalservice.getrentals();

    rentalobservable.subscribe((rentals:any)=>{
      this.rentals = rentals
    },(err:any)=>{
      console.log(err);
    
    },()=>{

    })

    
  }

}
