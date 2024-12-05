import { createFeatureSelector, createSelector, select } from "@ngrx/store"
import { AircraftsState, EntitiesState } from "./aircrafts.state"

export const selectAircraftState = createFeatureSelector<AircraftsState>('airbusState');
export const selectEntitiesState = createFeatureSelector<EntitiesState>("entitiesState");

export const getEntities = createSelector(
    selectEntitiesState,
  (state: EntitiesState) => state.entities 
);


export const  getDataState = createSelector(
    selectAircraftState,
    (state) => state.selectedAircraft
)

export const getErrorMessage = createSelector(
    selectAircraftState,
    (state : AircraftsState) => state.errorMessage 
)

export const selectCountAlertAircrafts = createSelector( 
    createFeatureSelector('airbusState'),
    (state : AircraftsState) => {
        let total : number = 0;
        state.aircrafts.forEach(a => {
            if (a.development == true && a.design == true) total++;
        })
        return total;

    }
)