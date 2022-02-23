import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post';
import { getPosts, updatePost } from 'src/app/posts.service';

@Component({
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {
  posts!: post[];

  constructor() {}

  ngOnInit(): void {
    const posts = getPosts();
    this.posts = posts;
  }

  onActivePosts(id: number, i: number): void {
    updatePost({ active: true }, id);
    this.posts.splice(i, 1);
  }
}

