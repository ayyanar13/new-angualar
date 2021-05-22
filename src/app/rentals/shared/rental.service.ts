import { Injectable} from "@angular/core";
import { observable, Observable } from "rxjs";
import { Rental } from "./rental.model";
import { HttpClient } from "@angular/common/http";

@Injectable()


export class rentalservice {
    constructor(private http: HttpClient){}
    
   public getrentalsbyId(renatlid:string|undefined):Observable<any>{
       return this.http.get('/api/v1/rentals/'+ renatlid)
   }

    
    public getrentals() :Observable<any>{
        return this.http.get('/api/v1/rentals/')
    }



}