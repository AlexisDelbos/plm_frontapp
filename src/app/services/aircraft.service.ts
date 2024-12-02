import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../model/aircraft.component';


@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor( private http : HttpClient) { }

  public getAircrafts(): Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host +"/aircrafts");    
  }

  public getDesignedAircrafts(): Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=true");
  }

  public getDevelopmentAircrafts(): Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");
  }

  public getAircraftByMsn(msn : number ): Observable<Aircraft>{
    return this.http.get<Aircraft>(environment.host+"/aircrafts/" + msn);
  }
  
}
