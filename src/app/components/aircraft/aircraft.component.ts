import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {  map, Observable } from 'rxjs';
import { AircraftsState, AircraftsStateEnum, EntitiesState } from 'src/app/ngrx/aircrafts.state';
import { GetAircraftByIdAction, GetAllEntitiesAction } from 'src/app/ngrx/aircrafts.actions';
import { getDataState, getEntities } from 'src/app/ngrx/aircrafts.selectors';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Entitie } from 'src/app/model/entitie.model';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  aircraft$: Aircraft | null = null;

  entities$: Observable<Entitie[]> = this.store.select(getEntities);

  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>, private route: ActivatedRoute, private router : Router) {
    
   }
  
  ngOnInit(): void {
    const aircraftId = this.route.snapshot.params['id'];
    console.log(aircraftId + "La");
    if (aircraftId > 0) {
      let idPage = Number(aircraftId);
      console.log(typeof(idPage));
      this.store.dispatch(new GetAircraftByIdAction(idPage));
    }
  
    this.store.dispatch(new GetAllEntitiesAction());
  
    this.store.select(getDataState).subscribe((data) => (this.aircraft$ = data));
  
    this.store.dispatch(new GetAllEntitiesAction());

  }
  
  


onBack() {
  this.router.navigateByUrl('/aircrafts');
}

}
