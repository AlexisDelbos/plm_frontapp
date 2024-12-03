import { GetAllAircraftsAction } from './../../ngrx/aircrafts.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ActionEvent } from 'src/app/model/ActionEvent';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftsActionsTypes } from 'src/app/ngrx/aircrafts.actions';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { AircraftService } from 'src/app/services/aircraft.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircraftsState$: Observable<AircraftsState> | null = null;

 readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(  private store : Store <any> , private airCraftService : AircraftService, private eventService : EventService) { }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }


}


