import { Injectable } from '@angular/core';
import { ActionEvent } from '../model/ActionEvent';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();

  eventSubjectObservable = this.eventSubject.asObservable();

  publishEvent(event : ActionEvent){
    this.eventSubject.next(event);
  }

  constructor() { }
}
