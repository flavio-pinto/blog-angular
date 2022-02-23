import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {
      id: 1,
      title: 'primo post',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'news',
    },
    {
      id: 2,
      title: 'secondo post',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'politic',
    },
    {
      id: 3,
      title: 'terzo  post',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'education',
    },
    {
      id: 4,
      title: 'quarto post',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: false,
      type: 'politic',
    },
    {
      id: 5,
      title: 'quinto post',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: false,
      type: 'education',
    }
  ];

  getPosts() {
    return this.posts;
  }

  getPost(idPost: number) {
    return this.posts.find((post) => post.id === idPost)
  }

  updatePost(data: Partial<Post>, id: number) {
    this.posts = this.posts.map((post) => (post.id == id ? { ...post, ...data } : post));
    return this.posts.find((post) => post.id == id) as Post;
  }
}


