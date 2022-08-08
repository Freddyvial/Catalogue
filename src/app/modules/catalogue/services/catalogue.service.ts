
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterCatalogueModel } from '@core/models/character-catalogue.model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  /**
   * 
   * @returns Devolver todos los personajes 🤘🤘
   */

  private skipById(listCharacter: CharacterCatalogueModel[], id: number): Promise<CharacterCatalogueModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listCharacter.filter(a => a.id !== id)
      resolve(listTmp)
    })
  }

  /**
   * //TODO
   * 
   * @returns 
   */
  getAllCharacter(): Observable<any> {
    return this.http.get(`${this.URL}/character`)
      .pipe(
        map(({ results }: any) => {
          return results
        })
      )
  }
  getAllCharacterUrl(url: string = ''): Observable<any> {
    return this.http.get(url)
      .pipe(
        map(({ results }: any) => {
          return results
        })
      )
  }
  getAllCharacterInfoUrl(url: string = ''): Observable<any> {
    return this.http.get(url)
      .pipe(
        map(({ info }: any) => {
          return info
        })
      )
  }
  getAllCharacterInfo(): Observable<any> {
    return this.http.get(`${this.URL}/character`)
      .pipe(
        map(({ info }: any) => {
          return info
        })
      )
  }
  getEpisodesByIds(ids: string): Observable<any> {
    return this.http.get(`${this.URL}/episode/${ids}`)
      .pipe(
        map((results: any) => {
          return results
        })
      )
  }
  getLocationById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/location/${id}`)
      .pipe(
        map((results: any) => {
          return results
        })
      )
  }
  /**
   * 
   * @returns Devolver personajes random
   */
  getAllRandom(url: string = ''): Observable<any> {
    return this.http.get(url.length > 0 ? url : `${this.URL}/character`)
      .pipe(
        mergeMap(({ results }: any) => this.skipById(results, 2)),
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
  
}
