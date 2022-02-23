import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="container mt-5 d-flex justify-content-around">
      <button (click)="goToActivePosts()" class="btn btn-primary">Vai ai post attivi</button>
      <button (click)="goToInactivePosts()" class="btn btn-danger">Vai ai post inattivi</button>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToActivePosts(){
    this.router.navigate(['/active-post']);
  }

  goToInactivePosts(){
    this.router.navigate(['/inactive-post']);
  }

}
