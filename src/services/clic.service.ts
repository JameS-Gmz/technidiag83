// clics.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClicsService {


  constructor(private http: HttpClient) { }

  // Enregistrer un clic (visite de la page)
  enregistrerClic(): Observable<any> {
    return this.http.post<any>(`https://vps.technidiag83.fr:3000/enregistrer-clic`, {});
  }

  // Obtenir le compteur actuel
  obtenirCompteur(): Observable<any> {
    return this.http.get<any>(`https://vps.technidiag83.fr:3000/obtenir-compteur`);
  }
}
