import { Admin } from './../model/admin.model';

export enum AdminStateEnum{
    LOADING = " Loading ",
    LOADED = " Loaded",
    ERROR = " Error ",
    INITIAL = " Initial",
}

export interface AdminState {
    Admin : Admin[],
    errorMessage  : string,
    dataState : AdminStateEnum
}

export const initState : AdminState  = {
    Admin : [],
    errorMessage:"",
    dataState : AdminStateEnum.INITIAL
}
