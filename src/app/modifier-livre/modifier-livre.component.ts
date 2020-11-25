import {Component, OnInit} from '@angular/core';
import {Livre} from '../model/Livre';
import {LivreServiceService} from '../shared/livre-service.service';
import {FormBuilder, MinLengthValidator, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modifier-livre',
  templateUrl: './modifier-livre.component.html',
  styleUrls: ['./modifier-livre.component.css']
})
export class ModifierLivreComponent implements OnInit {
  idL;
LivreL;
  constructor(public ServiceLivre: LivreServiceService, private f: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  form = this.f.group({
    id: ['', Validators.required],
    TitreLivre: ['', Validators.required],
    NomAuteur: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
    quantity: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
    like: ['', [Validators.required]]
  });

  get id() {
    return this.form.get('id');
  }

  get controles() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.idL = this.activatedRoute.snapshot.params['id'];
  }

}
