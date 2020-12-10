import {Component, OnInit, ViewChild} from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';
import {NgForm} from '@angular/forms';
import {Livre} from '../model/Livre';

@Component({
  selector: 'app-home-livre',
  templateUrl: './home-livre.component.html',
  styleUrls: ['./home-livre.component.css']
})
export class HomeLivreComponent implements OnInit {
  @ViewChild('f') CmpForm: NgForm;
  message: number;
  m;
  searchValue: string;
  titre;
  ListLivre: Livre[];
  nom;
  SearchMode = false;

  constructor(public ServiceLivre: LivreServiceService) {
  }


  ngOnInit(): void {
    this.SearchMode = false;
    this.ServiceLivre.AfficherListLivre();

  }

  onsearchh(form: NgForm) {
    this.SearchMode = true;
    const value = form.value;
    this.ServiceLivre.Recherche(value.titre, value.nom);
    this.ListLivre = this.ServiceLivre.ListSearch;
    this.ServiceLivre.search(value.titre, value.nom).subscribe(
      (data) => {
        if (value.titre != null) {
          this.ListLivre = data;
          console.log(this.ListLivre);
        }
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    )
    ;

    console.log(this.ServiceLivre.ListSearch);
  }

  cancel() {
    this.SearchMode = false;
    this.CmpForm.reset();
  }
}
