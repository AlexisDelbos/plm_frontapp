import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AircraftService } from "../services/aircraft.service";
import { AircraftsActionsTypes, GetAircraftByIdAction, GetAircraftByIdActionError, GetAircraftByIdActionSuccess, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetOnSearchBarAircraft } from "../ngrx/aircrafts.actions";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable()

export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions: Actions) {

    }

    getAllAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),


                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            }
            )
        )
    )

    getAllDesignedAircraftsEffects: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),


                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            }
            )
        )
    )

    getAllDevelopmentAircraftsEffects: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDevelopmentAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),


                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            }
            )
        )
    )
    getOnSearchBarAircrafts: Observable<Action> = createEffect(() =>
        this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS),
            mergeMap((action: GetOnSearchBarAircraft) => {
                const searchTerm = action.payload.prog;

                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => {
                        const filteredAircrafts = aircrafts.filter(aircraft =>
                            aircraft.prog.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                        return new GetAllAircraftsActionSuccess(filteredAircrafts);
                    }),
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                );
            })
        )
    );
    getAircraftByIdEffect: Observable<Action> = createEffect(() =>
        this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_AIRCRAFT_BY_ID),
            mergeMap((action: GetAircraftByIdAction) => {
                return this.aircraftService.getAircraftById(action.payload).pipe(
                    map((aircraft) => {
                        console.log('Avion récupéré:', aircraft); 
                        return new GetAircraftByIdActionSuccess(aircraft);
                    }),
                    catchError((err) => of(new GetAircraftByIdActionError(err.message)))
                );
            })
        )
    );
    
}