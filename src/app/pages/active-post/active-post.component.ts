import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post';
import * as postsSrv from 'src/app/posts.service';

@Component({
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
})
export class ActivePostComponent implements OnInit {
  posts!: post[];

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
