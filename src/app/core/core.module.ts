import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
    imports: [ HttpClientModule ], // Otherwise service will not work
    providers: [ DataService, SorterService ]
})
export class CoreModule { }