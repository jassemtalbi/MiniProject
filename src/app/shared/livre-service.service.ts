import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Livre} from '../model/Livre';
import {Router} from '@angular/router';
import {Biblio} from '../model/Biblio';

@Injectable({
  providedIn: 'root'
})
export class LivreServiceService {
  LivreUrl: string = '/api/Livre/';
  BiblioUrl: string = '/api/Biblio/';

  ListLivre: Livre[ ];
  ListBiblio: Biblio[];
  aa = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  public GetLivres() {
    return this.http.get<Livre[]>(this.LivreUrl);
  }

  AfficherListLivre() {
    this.aa = true;
    this.GetLivres().subscribe(
      (data) => {
        this.ListLivre = data;
        console.log(this.ListLivre);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    )
    ;
  }


  addLivre(li: Livre) {
    return this.http.post<Livre>(this.LivreUrl, li);
  }

  public ajouter(form) {
    this.aa = false;
    form.like = 0;
    this.addLivre(form).subscribe(
      (data) => {
        console.log('ajouter');
        this.router.navigate(['']);

      },
      (error) => {
        alert('id trouve');
      }
    );

  }

  public goToAjouter() {
    this.router.navigate(['AjouterLivre']);
  }

  ModifierLivre(li: Livre, id: number) {
    return this.http.put<Livre>(this.LivreUrl + id, li);
  }

  public ModifierLivre1(form, Id) {
    this.aa = false;
    this.ModifierLivre(form, Id).subscribe(
      (data) => {
        console.log('Modifier');

        this.router.navigate(['']);

      }, (error) => {
        alert('id non trouver');
      }
    );
  }

  public goToModifier(id) {
    this.router.navigate(['Modifier/' + id]);
  }

  DeleteProduct(id: number) {
    return this.http.delete<Livre[]>(this.LivreUrl + id);
  }

  public deleteProduct(id: number) {
    this.aa = false;
    this.DeleteProduct(id).subscribe();
    this.router.navigate(['delete/' + id]);
  }

  public GetBiblio() {
    return this.http.get<Biblio[]>(this.BiblioUrl);
  }

  AfficherListBiblio() {
    this.aa = true;
    this.GetBiblio().subscribe(
      (data) => {
        this.ListBiblio = data;
        console.log(this.ListBiblio);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    )
    ;
  }

  like(i: number) {
    this.ListLivre[i].like = this.ListLivre[i].like + 1;
  }

  addBiblio(li: Livre) {
    return this.http.post<Biblio>(this.BiblioUrl, li);
  }

  public ajouterBiblio(livre) {
    this.aa = false;
    this.addBiblio(livre.value).subscribe(
      (data) => {
        console.log('ajouter');
        this.router.navigate(['']);

      },
      (error) => {
        alert('id trouve');
      }
    );

  }

}
