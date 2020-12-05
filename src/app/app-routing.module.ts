import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeLivreComponent} from './home-livre/home-livre.component';
import {AddLivreComponent} from './add-livre/add-livre.component';
import {ModifierLivreComponent} from './modifier-livre/modifier-livre.component';
import {DeleteLivreComponent} from './delete-livre/delete-livre.component';
import {BiblioComponent} from './biblio/biblio.component';
import {ReservationComponent} from './reservation/reservation.component';

import {DetailsLivreComponent} from './details-livre/details-livre.component';
import {AuthentificationComponent} from './authentification/authentification.component';


const routes: Routes = [
  {
    path: 'Home', component: HomeLivreComponent
  },
  {
    path: '', component: AuthentificationComponent
  },
  {
    path: 'Home/AjouterLivre/Reservation', component: ReservationComponent
  },
  {
    path: 'Home/details/:id/Home', component: HomeLivreComponent
  },
  {
    path: 'Home/Reservation/AjouterLivre', component: AddLivreComponent
  },
  {
    path: 'Home/Reservation', component: ReservationComponent
  },
  {
    path: 'Home/details/:id/AjouterLivre', component: AddLivreComponent
  },
  {
    path: 'Home/Reservation/Home', component: HomeLivreComponent
  },
  {
    path: 'Home/delete/:id', component: DeleteLivreComponent
  },
  {
    path: 'Home/Modifier/:id', component: ModifierLivreComponent
  },
  {
    path: 'Home/Modifier/:id/Home', component: HomeLivreComponent
  },
  {
    path: 'Home/AjouterLivre', component: AddLivreComponent
  },
  {
    path: 'Home/AjouterLivre/Home', component: HomeLivreComponent
  },
  {
    path: 'Home/afficher', component: HomeLivreComponent
  },
  {
    path: 'Home/details/:id', component: DetailsLivreComponent
  },
  {
    path: 'Home/biblio', component: BiblioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
