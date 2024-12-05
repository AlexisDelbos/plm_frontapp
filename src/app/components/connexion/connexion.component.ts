import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ConnexionService } from 'src/app/services/connexion.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  //connexionState$: Observable<connexionsState> | null = null;

 // readonly connexionStateEnum = ConnexionStateEnum;

  constructor(  private store : Store <any> , private airCraftService : ConnexionService, private eventService : EventService) { }

  ngOnInit(): void {
    // this.connexionStateEnum = this.store.pipe(
    //   map((state) => state.airbusState)
    // );
  }
}
