import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemsComponent } from './rental-list-items/rental-list-items.component';
import { RentalsComponent } from './rentals.component';
import {rentalservice  } from "./shared/rental.service";


@NgModule({
    declarations:[
        RentalListComponent,
        RentalListItemsComponent,
        RentalsComponent
    ],
    imports:[
        CommonModule
    ],
    providers:[
        rentalservice
    ]

})
export class rentalsModule {
   
}