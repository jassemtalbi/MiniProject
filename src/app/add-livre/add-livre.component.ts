import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {LivreServiceService} from '../shared/livre-service.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  text;
  LivreL;
  text1;
  text2;
  text3;
  text4;
  imageSrc: string;

  constructor(private f: FormBuilder, public ServiceLivre: LivreServiceService) {
  }


  form = this.f.group({
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
  }

}
