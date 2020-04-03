import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  SERVER_URL: string = "api/images";
  constructor(private httpClient: HttpClient) { }

  public getImages(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.SERVER_URL)
      .pipe(
        tap(_ => console.log('Fetched images')),
        catchError(this.handleError('getImages', []))
      );
    }

  public getImage(imageId: number): Observable<any[]> {
    const url = `${this.SERVER_URL}/${imageId}`;
    return this.httpClient.get<any[]>(url)
    .pipe (
      tap(_ => console.log(`fetched movie ID ${imageId}`)),
      catchError(this.handleError<any[]>(`getMovie id=${imageId}`))
      );
    }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
