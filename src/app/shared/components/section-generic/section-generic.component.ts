import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterCatalogueModel, infoCharacterCatalogue } from '@core/models/character-catalogue.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataCatalogueCharacter: Array<CharacterCatalogueModel> = [];
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  @Input() info: infoCharacterCatalogue = {}
  pageIndex: number = 0;
  pageSize: number = 20;
  lowValue: number = 0;
  highValue: number = 20;
  constructor() { }

  ngOnInit(): void {
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
