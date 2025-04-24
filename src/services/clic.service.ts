// clics.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClicsService {
  private baseUrl = 'https://vps.technidiag83.fr:3000';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.error('Erreur HTTP:', error);
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Erreur côté client:', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(`Code d'erreur: ${error.status}, message: ${error.message}`);
    }
    return throwError(() => new Error('Une erreur est survenue lors de la communication avec le serveur'));
  }

  // Enregistrer un clic (visite de la page)
  enregistrerClic(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/enregistrer-clic`, {})
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtenir le compteur actuel
  obtenirCompteur(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/obtenir-compteur`)
      .pipe(
        catchError(this.handleError)
      );
  }
}
