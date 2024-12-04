import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { GetAircraftByIdAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  aircraft$: Observable<AircraftsState>;

  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const aircraftId = this.route.snapshot.params['id'];
    if (aircraftId > 0) {
      this.store.dispatch(new GetAircraftByIdAction(aircraftId));
    }
}
  


onBack() {
  this.router.navigateByUrl('/aircrafts');
}

}
