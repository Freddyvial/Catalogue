import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogueRoutingModule } from './catalogue-routing.module';


@NgModule({
  declarations: [
    CataloguePageComponent
    
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    SharedModule,
  ]
})
export class CatalogueModule { }
