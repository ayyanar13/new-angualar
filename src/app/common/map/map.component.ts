import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { MapService } from "../map/map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit {
  @Input() location:string | undefined
  islocation:boolean=false
  lat : number=0 ;
  lng :number=0 ;
  constructor(private mapservice: MapService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }
  mapreadyhandler(){
    if(this.location){
      this.mapservice.getgeocode(this.location).subscribe((respo)=>{
        if(respo.lat){
          this.lat=respo.lat
          this.lng=respo.lng
          this.ref.detectChanges()
        }else{
          this.islocation=true
        }
          
        
  
      })
    }
  }

}
