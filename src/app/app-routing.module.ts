import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeLivreComponent} from './home-livre/home-livre.component';
import {AddLivreComponent} from './add-livre/add-livre.component';
import {ModifierLivreComponent} from './modifier-livre/modifier-livre.component';
import {DeleteLivreComponent} from './delete-livre/delete-livre.component';
import {BiblioComponent} from './biblio/biblio.component';
import {ReservationComponent} from './reservation/reservation.component';


const routes: Routes = [
  {
    path: '', component: HomeLivreComponent
  },
  {
    path: 'Reservation', component: ReservationComponent
  },
  {
    path: 'delete/:id', component: DeleteLivreComponent
  },
  {
    path: 'Modifier/:id', component: ModifierLivreComponent
  },
  {
    path: 'AjouterLivre', component: AddLivreComponent
  },
  {
    path: 'afficher', component: HomeLivreComponent
  },
  {
    path: 'biblio', component: BiblioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
