import { NgModule } from '@angular/core';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    
  ],
  exports:[Error404PageComponent] //Para qye sea una ruta por defecto
})
export class SharedModule { }
