import {Component, OnInit} from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  key:string  = 'id';
  reverse: boolean = false;
  p:number=1;
  constructor(public ServiceLivre: LivreServiceService) {
  }

  ngOnInit(): void {
    this.ServiceLivre.AfficherListBiblio();
  }


  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
