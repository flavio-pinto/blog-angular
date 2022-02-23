import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from '../posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="!post.active" [post]="post">
          <button (click)="onActivePosts(post.id, i)" class="btn btn-primary">Attiva</button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: []
})
export class InactivePostComponent implements OnInit {
  posts!: Post[];

  constructor(private postsSrv: PostsService) {}

  ngOnInit(): void {
    const posts = this.postsSrv.getPosts();
    this.posts = posts;
  }

  onActivePosts(id: number, i: number): void {
    this.postsSrv.updatePost({ active: true }, id);
    this.posts.splice(i, 1);
  }
}

