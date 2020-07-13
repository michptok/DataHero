import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchResponse } from './../shared/models/search.model';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchResponse: SearchResponse;
  isQueryValid: boolean;
  errorMessage: string;
  customTooltipPosition = 'above';
  isLoading = true;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchHeroes();
  }

  searchHeroes(): void {
    this.route.params.subscribe((params) => {
      this.heroService.getHeroesByName(params.heroName).subscribe(
        (searchResponse) => {
          if (
            searchResponse.response === 'error' &&
            (searchResponse.error === 'character with given name not found' ||
              searchResponse.error === 'bad name search request')
          ) {
            this.isQueryValid = false;
            this.errorMessage = searchResponse.error;
          } else {
            this.isQueryValid = true;
            this.searchResponse = searchResponse;
          }
        },
        (error) => {},
        () => {
          this.isLoading = false;
        }
      );
    });
  }
}
