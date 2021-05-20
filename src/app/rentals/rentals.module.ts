import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemsComponent } from './rental-list-items/rental-list-items.component';
import { RentalsComponent } from './rentals.component';
import {rentalservice  } from "./shared/rental.service";

import { Routes, RouterModule } from "@angular/router";
import { RentalDetailsComponent } from './rental-details/rental-details.component';

const routes: Routes = [
    { path: "rentals", component: RentalsComponent ,
    children:[
        { path: '', component: RentalListComponent},
        { path: ':rentalid', component: RentalDetailsComponent}
    ]}
]
@NgModule({
    declarations:[
        RentalListComponent,
        RentalListItemsComponent,
        RentalsComponent,
        RentalDetailsComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers:[
        rentalservice
    ]

})
export class rentalsModule {
   
}