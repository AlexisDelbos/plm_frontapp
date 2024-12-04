import { Aircraft } from "../model/aircraft.model"
import { EntityState } from '@ngrx/entity'; 

export enum AircraftsStateEnum{
    LOADING = " Loading ",
    LOADED = " Loaded",
    ERROR = " Error ",
    INITIAL = " Initial",
}


export interface AircraftsState extends EntityState<Aircraft> {
    aircrafts : Aircraft[],
    selectedAircraft: Aircraft | null; 
    errorMessage  : string,
    dataState : AircraftsStateEnum
}

export const initState : AircraftsState  = {
    aircrafts : [],
    selectedAircraft: null, 
    errorMessage:"",
    dataState : AircraftsStateEnum.INITIAL,
    ids : [],
    entities : {}
}