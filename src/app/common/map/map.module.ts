import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapComponent } from "./map.component";
import { AgmCoreModule } from '@agm/core';
import { environment } from "src/environments/environment";

import { CommonModule } from "@angular/common";
import { MapService } from "../map/map.service";
import { CamelizePipe } from "ngx-pipes";


@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: environment.mapAPIKey,
            libraries: ['places']
        }),
        BrowserModule,
        CommonModule
    ],
    providers: [
        MapService,
        CamelizePipe
    ],
    exports:[
        MapComponent
    ]
})
export class MapModule { }
