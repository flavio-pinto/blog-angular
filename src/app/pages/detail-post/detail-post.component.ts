import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { post } from 'src/app/models/post';
import { getPost } from 'src/app/posts.service';

@Component({
  selector: 'app-detail-post',
  template: `
    <div *ngIf="post" [ngClass]="{
  'bg-warning': post.type == 'news',
  'bg-info': post.type == 'education',
  'bg-dark': post.type == 'politic',
  'text-white': post.type == 'politic'
}" class="mb-4">
      <h5 class="card-header">post</h5>
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.body}}</p>
      </div>
    </div>
  `,
  styles: []
})
export class DetailPostComponent implements OnInit {
  post!: post | undefined;
  sub!: Subscription;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activateRoute.params.subscribe((params: Params) => { //facendo così ci permette di recuperare i dati in tempo reale ogni volta che cambia la rotta
      const id = +params['id']; //il + trasforma la stringa in numero
      this.post = getPost(id);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
