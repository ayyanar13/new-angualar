import { Component, OnInit } from '@angular/core';
import { rentalservice } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private Rentalservice: rentalservice) { }

  ngOnInit(): void {
   const rentalobservable=this.Rentalservice.getrentals();

    rentalobservable.subscribe((rentals: Rental[])=>{
      this.rentals = rentals
      
    },(err:any)=>{
      console.log(err);
    
    },()=>{

    })

    
  }

}
