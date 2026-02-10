import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse, Character } from '../interfaces/character.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getCharacters(page: number = 1, name?: string): Observable<CharacterResponse> {
    let params = new HttpParams().set('page', page);

    if (name) {
      params = params.set('name', name);
    }

    return this.http.get<CharacterResponse>(this.apiUrl, { params });
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}