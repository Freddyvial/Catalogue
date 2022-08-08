import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterCatalogueModel, infoCharacterCatalogue } from '@core/models/character-catalogue.model';
import { CatalogueService } from '@modules/catalogue/services/catalogue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit, OnDestroy {
  catalogueTrending: Array<CharacterCatalogueModel> = []
  catalogueRandom: Array<CharacterCatalogueModel> = []
  info$: infoCharacterCatalogue = {};
  constructor(private catalogueService: CatalogueService) { }

  async ngOnInit(): Promise<void> {

    await this.loadDataAll() //TODO 📌📌
    await this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    this.catalogueTrending = await this.catalogueService.getAllCharacter$().toPromise()
    this.info$ = await this.catalogueService.getAllCharacterInfo$().toPromise();

  }

  loadDataRandom(): void {
    this.catalogueService.getAllRandom$()
      .subscribe((response: any) => {
        this.catalogueRandom = response
      })
  }
  async urlNext(url: string = '') {
    this.catalogueTrending = await this.catalogueService.getAllCharacterUrl$(url).toPromise()
    this.info$ = await this.catalogueService.getAllCharacterInfoUrl$(url).toPromise();
  }
  ngOnDestroy(): void {

  }
}
