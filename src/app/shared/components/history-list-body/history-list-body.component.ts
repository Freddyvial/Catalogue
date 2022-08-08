import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterCatalogueModel, infoCharacterCatalogue } from '@core/models/character-catalogue.model';




@Component({
  selector: 'app-history-list-body',
  templateUrl: './history-list-body.component.html',
  styleUrls: ['./history-list-body.component.css']
})
export class HistoryListBodyComponent implements OnInit {
  @Input() characters: CharacterCatalogueModel[] = []
  @Input() info: infoCharacterCatalogue = {}
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  mostrarPaginador: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.mostrarPaginador = this.characters?.length > 0 ? true : false;
  }
  pageIndex: number = 0;
  pageSize: number = 20;
  lowValue: number = 0;
  highValue: number = 20;
  changeSort(property: string): void {
    if (this.characters?.length > 0) {
      const { order } = this.optionSort
      this.optionSort = {
        property,
        order: order === 'asc' ? 'desc' : 'asc'
      }
    }
  }
  getPaginatorData(event: any) {

    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
    if (event.pageIndex > event.previousPageIndex)
      this.callbackData.emit(this.info.next);
    else
      this.callbackData.emit(this.info.prev);
  }

}
