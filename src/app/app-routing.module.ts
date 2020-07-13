import { AboutComponent } from './about/about.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomHeroesComponent } from './random-heroes/random-heroes.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: RandomHeroesComponent,
    pathMatch: 'full',
  },
  {
    path: 'hero/:heroId',
    component: HeroDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchResultsComponent,
    pathMatch: 'full',
  },
  {
    path: 'search/:heroName',
    component: SearchResultsComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  // }
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
