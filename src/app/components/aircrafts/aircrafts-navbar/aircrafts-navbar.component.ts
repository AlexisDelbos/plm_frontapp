import { GetOnSearchBarAircraft } from './../../../ngrx/aircrafts.actions';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AircraftsActionsTypes, GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftService } from 'src/app/services/aircraft.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {

  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  
  searchForm : FormGroup;
  
  constructor(private store : Store<any>, private aircraftService : AircraftService, private eventService : EventService) { 

   let aircraft = this.aircraftService.getAircrafts();
    this.searchForm = new FormGroup({
      prog : new FormControl(aircraft),
    })
  }

  ngOnInit(): void {
  }

  

  getAllAircrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  
  onSearch() {
    const prog = this.searchForm.get('prog')?.value;
    if (prog) {
      this.eventService.publishEvent({ type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload: prog });
    }
  }
  

  getAircraftByDesign(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircraft(){
    this.store.dispatch( new GetDevelopmentAircraftsAction({}))
  }

  GetOnSearchBarAircraft(){
    this.store.dispatch( new GetOnSearchBarAircraft({}))
  }

}
