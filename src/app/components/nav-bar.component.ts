import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bloh posts</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" [routerLink]="['/']" routerLinkActive="active"
                [routerLinkActiveOptions]="{exact: true}" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['active-post']" routerLinkActive="active">post attivi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['inactive-post']" routerLinkActive="active">Post inattivi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
