import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../intefaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cioc')
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url: string = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(paises => paises[0])
      );
  }

  buscarRegion(region: string): Observable<Country[]> {

    const url: string = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
