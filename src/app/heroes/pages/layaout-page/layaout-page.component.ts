import { Component } from '@angular/core';

@Component({
  selector: 'app-layaout-page',
  templateUrl: './layaout-page.component.html',
  styles: ``
})
export class LayaoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

}
