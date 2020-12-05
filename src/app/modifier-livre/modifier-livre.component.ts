import {Component, OnInit} from '@angular/core';
import {Livre} from '../model/Livre';
import {LivreServiceService} from '../shared/livre-service.service';
import {FormBuilder, FormControl, MinLengthValidator, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifier-livre',
  templateUrl: './modifier-livre.component.html',
  styleUrls: ['./modifier-livre.component.css']
})
export class ModifierLivreComponent implements OnInit {
  idL;
  LivreL;
  index;
  idc;
  i;
  TitreLivre;
  NomAuteur;
  quantity;
  price;
  Livre: Livre;
  text;
  text1;
  text2;
  text3;
  text4;
  imageSrc: string;
  constructor(public ServiceLivre: LivreServiceService, private f: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  form = this.f.group({
    id: ['', Validators.required],
    image: [null, [Validators.required]],
    fileSource: new FormControl('', [Validators.required]),
    TitreLivre: ['', Validators.required],
    NomAuteur: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
    quantity: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
  });

  get id() {
    return this.form.get('id');
  }

  get controles() {
    return this.form.controls;
  }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  ngOnInit(): void {
    this.idL = this.activatedRoute.snapshot.params['id'];
    this.ServiceLivre.getLivre(this.idL).subscribe(
      (data) => {
        this.Livre = data;
      }
    );
  }


}
