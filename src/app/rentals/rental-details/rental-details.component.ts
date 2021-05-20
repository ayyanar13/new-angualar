import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from "@angular/router";
import { Rental } from "../shared/rental.model";
import {  rentalservice} from "../shared/rental.service";

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {
  
  currntrentalid: any;
  rental: Rental | undefined ;

  constructor(private route: ActivatedRoute, private Rentalservice: rentalservice) { }

  ngOnInit(): void {
    this.rental = new Rental()
    this.route.params.subscribe((params)=>{
      console.log(params.rentalid);
      this.currntrentalid = params.rentalid
     this.getrentals(this.currntrentalid)
    })
  }
      getrentals( rentalid:string){
        this.Rentalservice.getrentalsbyId(rentalid).subscribe((rental: any)=>{
          this.rental = rental
          console.log(this.rental);
          
        })
  
      }

}
