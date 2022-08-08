import { Component, Input, OnInit } from '@angular/core';
import { CharacterCatalogueModel } from '@core/models/character-catalogue.model';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCharacterDetailComponent } from '../popup-character-detail/popup-character-detail.component';
@Component({
  selector: 'app-character-catalogue',
  templateUrl: './character-catalogue.component.html',
  styleUrls: ['./character-catalogue.component.css']
})
export class CharacterCatalogueComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() character: CharacterCatalogueModel = {id:0};

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  sendPlay(character: CharacterCatalogueModel): void {
    const dialogRef = this.dialog.open(PopUpCharacterDetailComponent, {
      width: '900px',
      disableClose: true,
      restoreFocus: false,
      data: character,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

      }
    });
  }

}
