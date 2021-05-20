import { Injectable} from "@angular/core";
import { observable, Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()


export class rentalservice {
    private rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Times Sqaure",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
    },
    {
        id:" 2",
        title: "Central Apartment 2",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        createdAt: "24/12/2017"
    },
    {
        id: "3",
        title: "Central Apartment 3",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
    },
    {
        id:" 4",
        title: "Central Apartment 4",
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 33,
        shared: true,
        createdAt: "24/12/2017"
    }]
   public getrentalsbyId(renatlid:string|undefined):Observable<Rental[]>{
       return new Observable<Rental[]>((observaber:any)=>{
           setTimeout(() => {
               var foundrental = this.rentals.find((rental)=>{
                   return rental.id == renatlid
               })
               observaber.next(foundrental)
           }, 500);
       })

   }

    
    public getrentals() :Observable<Rental[]>{
        return  new Observable<Rental[]>((observaber)=>{
            setTimeout(() => {
                observaber.next(this.rentals)
            }, 1000);
            setTimeout(() => {
                observaber.error("errrrrrrr")
            }, 2000);
        })
    }



}