import { ConnectAdminAction } from './auth.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ConnexionService } from "../services/connexion.service";
import { AdminActionType } from "../ngrx/auth.actions";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable()

export class AdminEffects{
    constructor(private ConnexionService : ConnexionService, private effectActions : Actions){

    }

    ConnectAdminEffect : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AdminActionType.CONNECT_ADMIN),
            mergeMap((action) => {
                return this.ConnexionService.ConnectAdmin().pipe(
                    map((Admin) => new ConnectAdminActionSuccess(Admin)),


                    catchError((err) => of(new ConnectAdminActionError(err.message)))
                )
            }
            )
        )
    )
  }
