import {Component, OnInit} from '@angular/core';
import {LivreServiceService} from '../shared/livre-service.service';

@Component({
  selector: 'app-home-livre',
  templateUrl: './home-livre.component.html',
  styleUrls: ['./home-livre.component.css']
})
export class HomeLivreComponent implements OnInit {
  message: number;
  m;
  searchValue:string;
  constructor(public ServiceLivre: LivreServiceService) {
  }


  ngOnInit(): void {
  }

  envoyeralet(m) {
       alert('prix Totale:' + m);
  }





  procces(message): number {
    console.log(message);
    this.m = message;
    return message;
  }
}
