import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { LivrosResultado } from '../models/interfaces';
import { Item } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  constructor(
    private http: HttpClient
  ) { }

  buscarLivros(valorDitado: string): Observable<LivrosResultado> {
    const params = new HttpParams().append('q', valorDitado);

    return this.http.get<LivrosResultado>(this.API, {
      params
    })
  //   .pipe(
  //     //tap((retornoAPI) => console.log('Fluxo do tap', retornoAPI)),
  //     //map(resultado => resultado.items ?? []),
  //     //tap(resultado => console.log('Fluxo após o map', resultado))
  //   )
   }


}
