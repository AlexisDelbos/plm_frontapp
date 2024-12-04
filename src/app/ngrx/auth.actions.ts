import { Admin } from './../model/admin.model';
import { Action } from "@ngrx/store";

export enum AdminActionType{
  CONNECT_ADMIN = "[Admin] Connect Admin",
}

export class ConnectAdminAction implements Action {
  type : AdminActionType = AdminActionType.CONNECT_ADMIN;
  constructor(public payload : any){

  }
}

export type AdminAction = ConnectAdminAction;
