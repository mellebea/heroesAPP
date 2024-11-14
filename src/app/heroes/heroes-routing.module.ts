import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { NewtPageComponent } from './pages/newt-page/newt-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayaoutPageComponent,
    children:[{ //rutas hijas pereozas
      path:'new-heroes',
      component:NewtPageComponent
    },
    {
      path:'seatch',
      component:SearchPageComponent
    },
    {
      path:'edit/:id',
      component:NewtPageComponent
    },
    {
      path:'list',
      component:ListPageComponent
    },
    {
      path:':id',
      component:HeroesPageComponent
    },
    {
      path:'**',
      redirectTo:'list'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
