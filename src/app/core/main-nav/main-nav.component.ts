import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.searchForm.value.searchedHeroName) {
      this.router.navigate([
        '/search/',
        this.searchForm.value.searchedHeroName,
      ]);
    }
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchedHeroName: new FormControl(null, Validators.required),
    });
  }
}
