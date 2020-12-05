import {Component, OnInit} from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';
import {user} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  login;
  pass;
  ListUser: user[];
  router;
  aa;

  constructor(public ServiceLivre: LivreServiceService, private activatedRoute: ActivatedRoute) {
  }

  public verification(log, mdp) {
    console.log(this.ListUser);
    for (let i = 0; i < this.ListUser.length; i++) {
      if ((this.ListUser[i].login == log) && (this.ListUser[i].mdp == mdp)) {
       // this.router.navigate(['acceuil']);
        this.aa = true;
      }

    }
    if (this.aa == false) {
      alert('verifier votre mot de passe');
    }

  }

  ngOnInit(): void {
    console.log(this.ListUser);

  }

}
