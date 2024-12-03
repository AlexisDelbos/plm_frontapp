import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";
export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aicrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Success Aircrafts",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get Error Aircrafts",

}

export class GetAllAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload : any){

    }
}
export class GetDesignedAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload : any){

    }
}

export class GetDevelopmentAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload : any){

    }
}

export class GetOnSearchBarAircraft implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS;
    constructor(public payload : any){

    }
}


export class GetAllAircraftsActionSuccess implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload : Aircraft[]){

    }
}

export class GetAllAircraftsActionError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload : string){

    }
}


export type AircraftsAction = GetAllAircraftsAction | GetDesignedAircraftsAction | GetDevelopmentAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError ;