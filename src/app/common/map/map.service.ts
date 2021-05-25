import {  Injectable} from "@angular/core";
import {  Observable } from "rxjs";
import { CamelizePipe } from "ngx-pipes";

@Injectable()
export class MapService {
    private geocoder:any
    private locationcache: any = {};
    constructor(private camelizePipe: CamelizePipe){
    }
    private caramaize(value:any):string {
        return this.camelizePipe.transform(value)
    }
    private cachelocation(location:any,coordinates:any){
      return this.locationcache[this.caramaize(location)] = coordinates
    }
    private islocationcached(location:any) {
        return this.locationcache[this.caramaize(location)]
    }
    private getlocation(location: any): Observable<any> {
        return new Observable((observer) => {
            this.geocoder.geocode({ address: location }, (result: any, status: any) => {
                if (status) {
                    const gemetory = result[0].geometry.location
                    const coordinate = { lat: gemetory.lat(), lng: gemetory.lng() }
                    this.cachelocation(location, coordinate)
                    observer.next(coordinate)
                } else {
                    observer.next("cannot get location")
                }
            })
        })
}
    public getgeocode(location: any):Observable<any>{
      this.geocoder=new window.google.maps.Geocoder()
      return new Observable((observer)=>{
          
            if (this.islocationcached(location)) {
                observer.next(this.locationcache[this.caramaize(location)])
            }else{
                this.getlocation(location)
            }
            
        
        })

  }
}