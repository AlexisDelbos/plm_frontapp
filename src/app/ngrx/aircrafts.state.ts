import { Aircraft } from "../model/aircraft.model"
import { EntityState } from '@ngrx/entity';
import { Entitie } from "../model/entitie.model";

export enum AircraftsStateEnum {
    LOADING = " Loading ",
    LOADED = " Loaded",
    ERROR = " Error ",
    INITIAL = " Initial",
}



export interface AircraftsState extends EntityState<Aircraft> {
    aircrafts: Aircraft[],
    selectedAircraft: Aircraft | null;
    errorMessage: string,
    dataState: AircraftsStateEnum,
}

export const initState: AircraftsState = {
    aircrafts: [],
    selectedAircraft: null,
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    ids: [],
    entities: {}
}

export enum EntitiesStateEnum {
    LOADING = " Loading ",
    LOADED = " Loaded",
    ERROR = " Error ",
    INITIAL = " Initial"
}

export interface EntitiesState {
    entities: Entitie[]; 
    selectedEntities: Entitie | null;
    errorMessage: string;
    dataStateEntities: EntitiesStateEnum;
}

export const initStateEntities: EntitiesState = {
    entities: [],
    selectedEntities: null,
    errorMessage: "",
    dataStateEntities: EntitiesStateEnum.INITIAL,
};