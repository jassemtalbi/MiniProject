import { Component, OnInit } from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrls: ['./details-livre.component.css']
})
export class DetailsLivreComponent implements OnInit {
idL;
Livre;
m;
  constructor(public ServiceLivre: LivreServiceService, private f: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idL = this.activatedRoute.snapshot.params.id;
    this.ServiceLivre.getLivre(this.idL).subscribe(
      (data) => {
        this.Livre = data;
      }
    );
  }
  procces(message): number {
    console.log(message);
    this.m = message;
    return message;
  }

}
