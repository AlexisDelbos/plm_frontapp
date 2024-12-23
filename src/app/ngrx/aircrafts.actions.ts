import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";
import { Entitie } from "../model/entitie.model";
import { createAction, props } from '@ngrx/store';


export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aicrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Success Aircrafts",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get Error Aircrafts",
    GET_AIRCRAFT_BY_ID = "[Aircrafts] Get Aircraft By Id",
    GET_AIRCRAFT_BY_ID_SUCCESS = "[Aircrafts] Get Aircraft By Id Success",
    GET_AIRCRAFT_BY_ID_ERROR = "[Aircrafts] Get Aircraft By Id Error",
    UPDATE_AIRCRAFT = '[Aircraft] Update Aircraft',
    UPDATE_AIRCRAFT_SUCCESS = '[Aircraft] Update Aircraft Success',
    UPDATE_AIRCRAFT_ERROR = '[Aircraft] Update Aircraft Error'

}

export enum OperationsActionsTypes {
    ADD_OPERATION = "[Operation] Add one ",
    REMOVE_OPERATION = "[Operation] Remove one "

}

export enum EntitiesActionsTypes {
    GET_ALL_ENTITIES = "[Entities] Get All Entities",
    GET_ALL_ENTITIES_SUCCESS = "[Entities] Get Success Entities",
    GET_ALL_ENTITIES_ERROR = "[Entities] Get Error Entities",
}

export class GetAllAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload: any) {

    }
}
export class GetDesignedAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload: any) {

    }
}

export class GetDevelopmentAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload: any) {

    }
}

export class GetOnSearchBarAircraft implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS;
    constructor(public payload: { prog: string }) { }
}



export class GetAllAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {

    }
}

export class GetAllAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload: string) {

    }
}

export class GetAircraftByIdAction implements Action {
    type = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID;
    constructor(public payload: number) { }
}

export class GetAircraftByIdActionSuccess implements Action {
    type = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_SUCCESS;
    constructor(public payload: Aircraft) { }
}

export class GetAircraftByIdActionError implements Action {
    type = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR;
    constructor(public payload: string) { }
}

export class AddOneOperation implements Action {
    type = OperationsActionsTypes.ADD_OPERATION;
    constructor(public payload: any) { }
}

export class RemoveOperation implements Action {
    type = OperationsActionsTypes.REMOVE_OPERATION;
    constructor(public payload: any) { }
}

export class GetAllEntitiesAction implements Action {
    type = EntitiesActionsTypes.GET_ALL_ENTITIES;
}

export class GetAllEntitiesActionSuccess implements Action {
    type = EntitiesActionsTypes.GET_ALL_ENTITIES_SUCCESS;
    constructor(public payload: Entitie[]) { }
}

export class GetAllEntitiesActionError implements Action {
    type = EntitiesActionsTypes.GET_ALL_ENTITIES_ERROR;
    constructor(public payload: any) { }
}


export class UpdateAircraftAction implements Action {
    readonly type = AircraftsActionsTypes.UPDATE_AIRCRAFT;

    constructor(public payload: Aircraft) { }
}


export class UpdateAircraftActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.UPDATE_AIRCRAFT_SUCCESS;

    constructor(public payload: Aircraft) { }
}

export class UpdateAircraftActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.UPDATE_AIRCRAFT_ERROR;

    constructor(public payload: string) { }
}



export type AircraftsAction = GetAllAircraftsAction | GetAircraftByIdAction | GetAircraftByIdActionSuccess | GetAircraftByIdActionError | GetOnSearchBarAircraft | GetDesignedAircraftsAction | GetDevelopmentAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | AddOneOperation;