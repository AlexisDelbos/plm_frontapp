import { AircraftsActionsTypes } from "./AircraftActionsTypes";

export interface ActionEvent{
    type : AircraftsActionsTypes,
    payload : any
}