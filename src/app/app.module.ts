import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
