import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeLivreComponent } from './home-livre/home-livre.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModifierLivreComponent } from './modifier-livre/modifier-livre.component';
import { DeleteLivreComponent } from './delete-livre/delete-livre.component';
import { BiblioComponent } from './biblio/biblio.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { ReservationComponent } from './reservation/reservation.component';
import { DetailsLivreComponent } from './details-livre/details-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLivreComponent,
    AddLivreComponent,
    ModifierLivreComponent,
    DeleteLivreComponent,
    BiblioComponent,
    SearchfilterPipe,
    ReservationComponent,
    DetailsLivreComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
