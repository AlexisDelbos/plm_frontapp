import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {map, Observable } from 'rxjs';
import { selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts.selectors';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

 aircraftsState$: Observable<AircraftsState> | null = null;

 readonly aircraftsStateEnum = AircraftsStateEnum;
 countAlertAircrafts$ : Observable<number> | undefined;
  constructor(  private store : Store <any>, private router : Router ) {
    this.countAlertAircrafts$ = store.select(selectCountAlertAircrafts);
   }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }

  onSelect(aircraftId: number) {
    this.router.navigateByUrl(`/aircrafts/${aircraftId}`);
  }


}


