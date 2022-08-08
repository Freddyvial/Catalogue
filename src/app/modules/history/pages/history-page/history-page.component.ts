import { Component, OnInit } from '@angular/core';
import { CharacterCatalogueFilter } from '@core/models/character-catalogue.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI | undefined;
  listResults$: Observable<any> = of([]);
  info$: Observable<any> = of([]);
  filtrosVacios: boolean = true;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  urlNext(url: string = '') {
    try {
      this.blockUI?.start();
      this.listResults$ = this.searchService.searchCharacterUrl$(url);
      this.info$ = this.searchService.searchCharacterUrlInfo$(url);
    } catch (error) {

    } finally {
      this.blockUI?.stop();
    }

  }
  receiveData(filter: CharacterCatalogueFilter): void {
    if (filter) {
      let data: any = filter
      for (var key in data) {
        if (data[key] === "") {
          delete data[key]
        }
      }
      filter = data;
    }
    const isEmpty = Object.values(filter).length === 0;
    if (isEmpty) {
      this.listResults$ = of([]);
      this.info$ = of([]);
    } else {
      try {
        this.blockUI?.start();
        this.listResults$ = this.searchService.searchCharacter$(filter);
        this.info$ = this.searchService.searchCharacterInfo$(filter);
      } catch (error) {

      } finally {
        this.blockUI?.stop();
      }
    }
  }
}
