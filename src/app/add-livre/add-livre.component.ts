import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {LivreServiceService} from '../shared/livre-service.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
text;
  text1;
  text2;
  text3;
  text4;

  constructor(private f: FormBuilder, public ServiceLivre: LivreServiceService) {
  }

  form = this.f.group({
    id: ['', Validators.required],
    TitreLivre: ['', Validators.required],
    NomAuteur: ['', [Validators.required]],
    price: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    like: ['', [Validators.required]]


  });

  get id() {
    return this.form.get('id');
  }

  url = './assets/image/1.jpg ';

  selectFile(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  ngOnInit(): void {
  }

}
