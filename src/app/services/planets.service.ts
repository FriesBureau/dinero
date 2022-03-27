import { Injectable } from '@angular/core';
import { Planet } from '@app/models/planet.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private planetsUrl = 'https://swapi.dev/api/planets';


  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

      }),
    withCredentials: false
  };

  constructor(
    private httpClient: HttpClient) { }

  /** GET products from the API server */
  getPlanets(): Observable<Planet> {
    return this.httpClient.get<Planet>(this.planetsUrl, { observe: 'body' })
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  getPlanet(id: number): Observable<Planet> {
    return this.httpClient.get<Planet>(this.planetsUrl + '/' + id, { observe: 'body' })
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  getPlanetChangePage(changePageUrl: string): Observable<Planet> {
    return this.httpClient.get<Planet>(changePageUrl, { observe: 'body' })
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error());
  }
}
