import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterCatalogueFilter } from '@core/models/character-catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  searchCharacter(datos: CharacterCatalogueFilter): Observable<any> {
    return this.http.get(`${this.URL}/character` + this.filterString(datos))
      .pipe(
        map(({ results }: any) => results)
      )
  }
  searchCharacterUrl(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(
        map(({ results }: any) => results)
      )
  }
  searchCharacterUrlInfo(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(
        map(({ info }: any) => info)
      )
  }
  searchCharacterInfo(datos: CharacterCatalogueFilter): Observable<any> {
    return this.http.get(`${this.URL}/character` + this.filterString(datos))
      .pipe(
        map(({ info }: any) => info)
      )
  }
  
  public filterString(filter: any): string {
    let data: string = '';
    if (filter) {
      for (let [key, value] of Object.entries(filter)) {

        if (value != null && value != undefined && value !='') {
          if (data.length == 0) {
            data = '?';
          } else {
            data += '&';
          }

          data += key + '=' + value;
        }
      }
    }


    return data;
  }
}
