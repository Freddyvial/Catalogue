import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterCatalogueModel } from '@core/models/character-catalogue.model';
import { EpisodeCatalogueModel } from '@core/models/episode-catalogue.model';
import { LocationCatalogueModel } from '@core/models/location-catalogue.model';
import { CatalogueService } from '@modules/catalogue/services/catalogue.service';

@Component({
    selector: 'app-popup-character-detail',
    templateUrl: './popup-character-detail.component.html',
    styleUrls: ['./popup-character-detail.component.css'],
})
export class PopUpCharacterDetailComponent {
    public character: CharacterCatalogueModel = {};
    public episodes: EpisodeCatalogueModel[] = [];
    public location: LocationCatalogueModel = {}
    pageIndex:number = 0;
    pageSize:number = 5;
    lowValue:number = 0;
    highValue:number = 5;    
    constructor(private catalogueService: CatalogueService,
        public dialogRef: MatDialogRef<PopUpCharacterDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public dataIn: CharacterCatalogueModel) {
        if (dataIn) {
            this.character = dataIn;
            this.getInfoEpisodes(this.character.episode)
            this.getLocation(this.character?.location?.url)
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    agregar() {
        this.dialogRef.close();
    }
    getPaginatorData(event:any){

        if(event.pageIndex === this.pageIndex + 1){
           this.lowValue = this.lowValue + this.pageSize;
           this.highValue =  this.highValue + this.pageSize;
          }
       else if(event.pageIndex === this.pageIndex - 1){
          this.lowValue = this.lowValue - this.pageSize;
          this.highValue =  this.highValue - this.pageSize;
         }   
          this.pageIndex = event.pageIndex;
    }
    async getInfoEpisodes(episodes: string[] = []) {
        let paramsUrl: string = '';
        episodes.forEach(element => {
            let array = element.split('/');
            if (paramsUrl.length > 0) {
                paramsUrl = paramsUrl + ',' + array[array.length - 1];
            } else {
                paramsUrl = array[array.length - 1];
            }

        });
        await this.espisodesByIds(paramsUrl)
    }
    async espisodesByIds(paramsUrl: string): Promise<any> {
        this.episodes = await this.catalogueService.getEpisodesByIds(paramsUrl).toPromise()
        if (!Array.isArray(this.episodes))
            this.episodes = [this.episodes];
    }
    async getLocation(url: string = '') {
        let array = url.split('/');
        this.location = await this.catalogueService.getLocationById(array[array.length - 1]).toPromise()
    }
}
