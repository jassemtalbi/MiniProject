import { Component, OnInit } from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public ServiceLivre: LivreServiceService) { }

  ngOnInit(): void {
  }

}
