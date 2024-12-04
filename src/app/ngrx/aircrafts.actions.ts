import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";
export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aicrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Success Aircrafts",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get Error Aircrafts",
    GET_AIRCRAFT_BY_ID = "[Aircrafts] Get Aircraft By Id",
    GET_AIRCRAFT_BY_ID_SUCCESS = "[Aircrafts] Get Aircraft By Id Success",
    GET_AIRCRAFT_BY_ID_ERROR = "[Aircrafts] Get Aircraft By Id Error",

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
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS;
    constructor(public payload: { prog: string }) {} 
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

export class GetAircraftByIdAction implements Action {
    type = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID;
    constructor(public payload: number) {}  
}

export class GetAircraftByIdActionSuccess implements Action {
    type = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_SUCCESS;
    constructor(public payload: Aircraft) {}  
}

export class GetAircraftByIdActionError implements Action {
    type = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR;
    constructor(public payload: string) {}  
}


export type AircraftsAction = GetAllAircraftsAction | GetAircraftByIdAction | GetAircraftByIdActionSuccess |GetAircraftByIdActionError | GetOnSearchBarAircraft | GetDesignedAircraftsAction | GetDevelopmentAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError ;