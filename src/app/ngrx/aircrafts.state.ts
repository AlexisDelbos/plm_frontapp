import { Aircraft } from "../model/aircraft.model"
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'; // Importation nécessaire

export enum AircraftsStateEnum{
    LOADING = " Loading ",
    LOADED = " Loaded",
    ERROR = " Error ",
    INITIAL = " Initial",
}

export interface AircraftsState extends EntityState<Operation> {
    aircrafts : Aircraft[],
    selectedAircraft: Aircraft | null; 
    errorMessage  : string,
    dataState : AircraftsStateEnum
}


export const adapter : EntityAdapter <Operation>({});


export const initState : AircraftsState  = {
    aircrafts : [],
    selectedAircraft: null, 
    errorMessage:"",
    dataState : AircraftsStateEnum.INITIAL,
    ids : [],
    entities : []
}