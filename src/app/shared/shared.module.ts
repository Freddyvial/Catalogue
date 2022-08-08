import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { CharacterCatalogueComponent } from './components/character-catalogue/character-catalogue.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HistoryListBodyComponent } from './components/history-list-body/history-list-body.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpCharacterDetailComponent } from './components/popup-character-detail/popup-character-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    CharacterCatalogueComponent,
    SectionGenericComponent,
    SideBarComponent,
    HistoryListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    PopUpCharacterDetailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CharacterCatalogueComponent,
    SectionGenericComponent,
    SideBarComponent,
    HistoryListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    MatDialogModule,
    PopUpCharacterDetailComponent,
    MatPaginatorModule,
    MatSelectModule, 
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
