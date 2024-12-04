import { GetAircraftByIdAction, GetOnSearchBarAircraft } from './../../../ngrx/aircrafts.actions';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  
  constructor(private store : Store<any>, private router : Router,  private aircraftService : AircraftService, private eventService : EventService) { 

   let aircraft = this.aircraftService.getAircrafts();
    this.searchForm = new FormGroup({
      prog : new FormControl(aircraft),
    })
  }

  ngOnInit(): void {
  }

  viewAircraftDetails(id: number): void {
    this.router.navigate([`/aircrafts/${id}`]);

    this.store.dispatch(new GetAircraftByIdAction(id));
  }

  getAllAircrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  
  onSearch() {
    const prog = this.searchForm.get('prog')?.value;
    if (prog) {
      this.store.dispatch(new GetOnSearchBarAircraft({ prog }));
    }
  }
  

  getAircraftByDesign(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircraft(){
    this.store.dispatch( new GetDevelopmentAircraftsAction({}))
  }



}
