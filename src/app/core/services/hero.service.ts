import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Hero } from '../../shared/models/hero.model';
import { SearchResponse } from '../../shared/models/search.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Backend has broken CORS policy. W/A: baseAPIurl moved to "target" in proxy.conf.json
  private baseApiUrl = 'https://superheroapi.com/api/';

  private apiToken = '2649848385250442';
  private url = '/api/' + this.apiToken + '/';

  constructor(private http: HttpClient) {}

  getRandomHero(randomUniqueNumber: number): Observable<Hero> {
    return this.http.get<Hero>(this.url + randomUniqueNumber);
  }

  getHeroById(heroId: string): Observable<Hero> {
    return this.http.get<Hero>(this.url + heroId);
  }

  getHeroesByName(name: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url + 'search/' + name);
  }
}
