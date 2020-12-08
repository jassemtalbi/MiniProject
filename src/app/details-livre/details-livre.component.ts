import {Component, OnInit} from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrls: ['./details-livre.component.css']
})
export class DetailsLivreComponent implements OnInit {


  constructor(public ServiceLivre: LivreServiceService, private f: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  idL;
  Livre;
  m;
  value;
  elementType = 'Description de  Livre';

  ngOnInit(): void {
    this.idL = this.activatedRoute.snapshot.params.id;
    this.ServiceLivre.getLivre(this.idL).subscribe(
      (data) => {
        this.Livre = data;
        this.value = 'le nom du Livre : ' + this.Livre.TitreLivre + ' et le Nom d auteur :' + this.Livre.NomAuteur + ' avec un prix de :' + this.Livre.price;
      }
    );
  }

  procces(message): number {
    console.log(message);
    this.m = message;
    alert('le prix Totale de ces Livres est ' + this.m);
    return message;

  }

}
