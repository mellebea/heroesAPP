import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewtPageComponent } from './pages/newt-page/newt-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';


@NgModule({
  declarations: [
    HeroesPageComponent,
    LayaoutPageComponent,
    ListPageComponent,
    NewtPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
