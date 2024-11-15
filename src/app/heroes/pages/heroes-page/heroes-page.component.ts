import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styles: ``
})
export class HeroesPageComponent implements OnInit{
  
  public hero?: Hero;

  constructor(private heroesServices:HeroesService, private activeRoute:ActivatedRoute,
              private router:Router){}
  
  ngOnInit(): void {
    this.activeRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesServices.getHeroById( id )),
    )
    .subscribe( hero => {

      if ( !hero ) return this.router.navigate([ '/heroes/list' ]);

      this.hero = hero;
      return;
    })
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }

}
