import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {
  @Input() Nombre;
  @Input() price;

  @Output() notif = new EventEmitter();

  constructor(public ServiceLivre: LivreServiceService) {
  }

  ngOnInit(): void {
  }

  priceTotale(): number {
    var a = 0;
    a = this.Nombre * this.price;
    this.notif.emit(a);
    return a;
  }
}
