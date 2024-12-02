import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AircraftsActionsTypes } from 'src/app/model/AircraftActionsTypes';
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
  
  constructor(private aircraftService : AircraftService, private eventService : EventService) { 

   let aircraft = this.aircraftService.getAircrafts();
    this.searchForm = new FormGroup({
      program : new FormControl(aircraft),
    })
  }

  ngOnInit(): void {
  }

  getAllAircrafts(){
    this.eventService.publishEvent({type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS, payload : null})
  }

  onSearch(value : any){
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload : value});
  }

  getAircraftByDesign(){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload : null});
  }

  getDevelopmentAircraft(){
    console.log("Test development");
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload : null});    
  }

}
