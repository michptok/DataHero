import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { RandomHeroesComponent } from './random-heroes/random-heroes.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ImagePreloadDirective } from './shared/directives/image-preload.directive';
import { MaterialModule } from './shared/material/material.module';
import { ProgressSpinnerComponent } from './shared/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ProgressSpinnerComponent,
    HeroDetailsComponent,
    RandomHeroesComponent,
    SearchResultsComponent,
    AboutComponent,
    ImagePreloadDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
