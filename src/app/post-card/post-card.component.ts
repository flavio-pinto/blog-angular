import { Component, Input, OnInit } from '@angular/core';
import { post } from '../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  template: `
  <div [ngClass]="{
    'bg-warning': post.type == 'news',
    'bg-info': post.type == 'education',
    'bg-dark': post.type == 'politic',
    'text-white': post.type == 'politic'
  }" class="mb-4">
    <h5 class="card-header">post</h5>
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">{{post.body}}</p>
      <ng-content></ng-content>
      <button type="button" class="btn btn-primary" (click)="goToActivePosts()">Dettagli</button>
    </div>

  </div>`,
  styles: []
})
export class PostCardComponent implements OnInit {
  @Input() post!: post;
  @Input() bgColor!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToActivePosts() {
    this.router.navigate(['detail-post/' + this.post.id]);
  }

}
