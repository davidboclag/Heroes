import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe';




@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.heroesUrl}/heroes`);
  }

  getHeroesById(id: number): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.heroesUrl}/heroes/${id}`);
  }

  getHeroesByName(name: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.heroesUrl}/heroes?name_like=${name}`);
  }

  getHeroesByPage(pageSize: number, pageIndex: number): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.heroesUrl}/heroes?_limit=${pageSize}&_page=${pageIndex}`);
  }

  modifyHeroe(heroe: Heroe): Observable<Heroe[]> {
    return this.http.patch<Heroe[]>(`${this.heroesUrl}/heroes/${heroe.id}`, heroe);
  }

  deleteHeroe(id: number) {
    return this.http.delete<Heroe[]>(`${this.heroesUrl}/heroes/${id}`);
  }

  createHeroe(heroe: Heroe): Observable<Heroe[]> {
    return this.http.post<Heroe[]>(`${this.heroesUrl}/heroes`, heroe);
  }
}
