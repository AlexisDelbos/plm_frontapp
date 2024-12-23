import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../model/aircraft.model';
import { Admin } from '../model/admin.model';
import { Entitie } from '../model/entitie.model';


@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http: HttpClient) { }

  public getAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts");
  }

  public getDesignedAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }

  public getDevelopmentAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?development=true");
  }

  public getAircraftById(id: number): Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id);

  }

  public searchAircrafts(program: string): Observable<Aircraft[]> {
    const url = `${environment.host}/aircrafts?prog_like=${program}`;
    return this.http.get<Aircraft[]>(url);
  }

  public getAdmin(email: String) {
    return this.http.get<Admin>(environment.host + `/admins?email=${email}`);
  }

  public getEntities(): Observable<Entitie[]> {
    return this.http.get<Entitie[]>(environment.host + '/entities');
  }

  public updateAircraft(id: number, aircraftData: { design: boolean, development: boolean }): Observable<Aircraft> {
    return this.http.patch<Aircraft>(environment.host + '/aircrafts/' + id, aircraftData);
  }
  


}
