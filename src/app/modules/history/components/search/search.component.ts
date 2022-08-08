import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterCatalogueFilter } from '@core/models/character-catalogue.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  filter:CharacterCatalogueFilter={};

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(): void {
    setTimeout(() => {     
    
     this.callbackData.emit(this.filter)
    }, 100);
  
 

  }

}
