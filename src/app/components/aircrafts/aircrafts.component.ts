import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ActionEvent } from 'src/app/model/ActionEvent';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AppDataState, DataStateEnum } from 'src/app/model/aircraft.state';
import { AircraftsActionsTypes } from 'src/app/model/AircraftActionsTypes';
import { AircraftService } from 'src/app/services/aircraft.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  
 aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
 error = null;

 readonly dataStateEnum = DataStateEnum;

  constructor( private airCraftService : AircraftService, private eventService : EventService) { }

  ngOnInit(): void {
    this.eventService.eventSubjectObservable.subscribe((actionEvent : ActionEvent) => {
      this.onActionEvent(actionEvent);
    })
  }

  getAllAircrafts(){
    this.aircrafts$ = this.airCraftService.getAircrafts().pipe(
      map(data => ({ dataState : DataStateEnum.LOADED, data : data})),

      startWith({ dataState : DataStateEnum.LOADING}),
      catchError(err => of({ dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )
  }

  getAircraftByDesign(){
    this.aircrafts$ = this.airCraftService.getDesignedAircrafts().pipe(
      map(data => ({ dataState : DataStateEnum.LOADED, data : data})),

      startWith({ dataState : DataStateEnum.LOADING}),
      catchError(err => of({ dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )  }

  getDevelopmentAircraft(){
    this.aircrafts$ = this.airCraftService.getDevelopmentAircrafts().pipe(
      map(data => ({ dataState : DataStateEnum.LOADED, data : data})),

      startWith({ dataState : DataStateEnum.LOADING}),
      catchError(err => of({ dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )
  }

  getAircraftBySearch(program: string) {
    this.aircrafts$ = this.airCraftService.searchAircrafts(program).pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),

      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    );
  }
  


  onActionEvent($actionEvent : ActionEvent){
    switch($actionEvent.type){
      case AircraftsActionsTypes.GET_ALL_AIRCRAFTS :
        this.getAllAircrafts();
        break;

      case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS : 
      this.getDevelopmentAircraft();
      break;

      case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS :
      this.getAircraftByDesign();
      break;

      case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS : 
      this.getAircraftBySearch($actionEvent.payload);
      break;
    }

  }

}

