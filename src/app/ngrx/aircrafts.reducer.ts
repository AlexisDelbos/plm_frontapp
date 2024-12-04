import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsAction, AircraftsActionsTypes, OperationsActionsTypes } from "../ngrx/aircrafts.actions";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Aircraft } from "../model/aircraft.model";

export const adapter : EntityAdapter <Aircraft> = createEntityAdapter({});


export const initialState : AircraftsState = adapter.getInitialState({
    aircrafts : [],
    selectedAircraft: null, 
    errorMessage:"",
    dataState : AircraftsStateEnum.INITIAL,
    ids : [],
    entities : []
})



export function AircraftsReducer(state: AircraftsState = initState, action: Action) : AircraftsState {
    switch (action.type) {



        // Tous les avions
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("loading...");
            return { ...state, dataState: AircraftsStateEnum.LOADING }

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            console.log("success...");
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsAction>action).payload }

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsAction>action).payload }



        // By ID
        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID:
            
            return { ...state, dataState: AircraftsStateEnum.LOADING };

        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_SUCCESS:
            console.log("Avion récupéré dans le reducer:", (<AircraftsAction>action).payload);
            return {...state, dataState: AircraftsStateEnum.LOADED, selectedAircraft: (<AircraftsAction>action).payload };
        
        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsAction>action).payload};
    


        // Ajouter & Supprimer
        case OperationsActionsTypes.ADD_OPERATION:
            return { ...state, dataState: AircraftsStateEnum.LOADED, errorMessage: (<AircraftsAction>action).payload };

        case OperationsActionsTypes.REMOVE_OPERATION:
            return { ...state, dataState: AircraftsStateEnum.LOADED, errorMessage: (<AircraftsAction>action).payload };

        default:
            return { ...state }
    }
}