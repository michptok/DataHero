import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from './../core/services/hero.service';
import { Hero } from './../shared/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  customTooltipPosition = 'above';
  hero: Hero;
  isLoading = true;
  heroId: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroDetails();
  }

  getHeroDetails() {
    this.route.params.subscribe((params) => {
      this.heroService.getHeroById(params.heroId).subscribe(
        (hero) => {
          if (hero.response === 'error' && hero.error === 'invalid id') {
            this.router.navigate(['../../'], { relativeTo: this.route });
          } else {
            this.hero = hero;
          }
        },
        (error) => {
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        () => {
          this.isLoading = false;
        }
      );
    });
  }

  goToNextHero() {
    this.isLoading = true;
    this.heroId = this.hero.id;
    if (this.heroId === '732') {
      this.heroId = '1';
    } else {
      this.heroId = (+this.hero.id + 1).toString();
    }
    this.router.navigate(['../', this.heroId], { relativeTo: this.route });
  }

  goToPreviousHero() {
    this.isLoading = true;
    this.heroId = this.hero.id;
    if (this.heroId === '1') {
      this.heroId = '732';
    } else {
      this.heroId = (+this.hero.id - 1).toString();
    }
    this.router.navigate(['../', this.heroId], { relativeTo: this.route });
  }
}
