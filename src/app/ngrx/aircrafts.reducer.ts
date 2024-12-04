import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsAction, AircraftsActionsTypes } from "../ngrx/aircrafts.actions";

export function AircraftsReducer(state: AircraftsState = initState, action: Action) {
    switch (action.type) {
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("loading...");
            return { ...state, dataState: AircraftsStateEnum.LOADING }

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            console.log("success...");
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsAction>action).payload }

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsAction>action).payload }


        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID:
            return { ...state, dataState: AircraftsStateEnum.LOADING };

        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_SUCCESS:
            console.log("Avion récupéré dans le reducer:", (<AircraftsAction>action).payload);
            return {
                    ...state,
                    dataState: AircraftsStateEnum.LOADED,
                    selectedAircraft: (<AircraftsAction>action).payload
            };
            


        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsAction>action).payload };

        default:
            return { ...state }
    }
}