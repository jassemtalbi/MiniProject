import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-livre',
  templateUrl: './delete-livre.component.html',
  styleUrls: ['./delete-livre.component.css']
})
export class DeleteLivreComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.navigate(['Home']);
  }
  ngOnInit(): void {
  }

}
