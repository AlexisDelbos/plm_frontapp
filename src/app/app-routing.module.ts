import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftComponent } from './components/aircraft/aircraft.component';
const routes: Routes = [
  { path: 'aircrafts', component : AircraftsComponent },
  { path: 'aircrafts/:id', component: AircraftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
