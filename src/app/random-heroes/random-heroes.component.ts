import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from './../shared/models/hero.model';


@Component({
  selector: 'app-random-heroes',
  templateUrl: './random-heroes.component.html',
  styleUrls: ['./random-heroes.component.scss'],
})
export class RandomHeroesComponent implements OnInit {
  hero: Hero;
  heroes: Hero[] = [];
  randomUniqueNumbers: number[] = [];
  loadingCounter: number;
  randomHeroesTotal = 12;
  private firstHeroId = 1;
  private lastHeroId = 732;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.loadingCounter = 0;
    this.getRandomUniqueNumbers();
    for (let i = 0; i < this.randomHeroesTotal; i++) {
      this.heroService.getRandomHero(this.randomUniqueNumbers[i]).subscribe(
        (hero) => {
          this.heroes.push(hero);
        },
        (error) => {},
        () => {
          this.loadingCounter++;
        }
      );
    }
  }

  getRandomUniqueNumbers() {
    const min = Math.ceil(this.firstHeroId);
    const max = Math.floor(this.lastHeroId + 1);
    let randomNumber: number;
    for (let i = 0; this.randomUniqueNumbers.length !== this.randomHeroesTotal; i++) {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (!this.randomUniqueNumbers.includes(randomNumber)) {
        this.randomUniqueNumbers.push(randomNumber);
      }
    }
  }

  reloadHeroes() {
    this.randomUniqueNumbers.length = 0;
    this.heroes.length = 0;
    this.getHeroes();
  }
}
