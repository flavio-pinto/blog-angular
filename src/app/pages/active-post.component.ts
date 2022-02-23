import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as postsSrv from 'src/app/posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="post.active" [post]="post">
          <button (click)="onInactivePosts(post.id, i)" class="btn btn-primary">Disattiva</button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: [],
})
export class ActivePostComponent implements OnInit {
  posts!: Post[];

  constructor() {}

  ngOnInit(): void {
    const posts = postsSrv.getPosts();
    this.posts = posts;
  }

  onInactivePosts(id: number, i: number) {
    postsSrv.updatePost({active: false}, id);
    this.posts.splice(i, 1);
  }
}
