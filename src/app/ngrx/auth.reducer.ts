import { Action } from "@ngrx/store";
import { AdminState, AdminStateEnum, initState } from "./auth.state";
import { AdminAction, AdminActionType } from "../ngrx/auth.actions";

export function AdminReducer(state : AdminState = initState, action : Action){
    switch(action.type){
        case  AdminActionType.CONNECT_ADMIN:
            console.log("loading...");
            return{...state, dataState : AdminStateEnum.LOADING}

        default :
            return {...state}
}
}
