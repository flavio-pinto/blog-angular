import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {
      id: 1,
      title: 'Pippo Baudo con la sua nuova fiamma: +++ SFOGLIA LA GALLERY +++',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'news',
    },
    {
      id: 2,
      title: 'Giancarlo Magalli nominato padrone supremo della galassia Andromeda',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'politic',
    },
    {
      id: 3,
      title: 'Alla scoperta del nuovo framework JavaScript: ReAnguVueJS',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'education',
    },
    {
      id: 4,
      title: 'Arrestato sindaco di Lavandonia',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: false,
      type: 'politic',
    },
    {
      id: 5,
      title: 'Abolita la scuola!',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: false,
      type: 'education',
    },
    {
      id: 6,
      title: 'UFFICIALE: Ricette di Benedetta Parodi fanno schifo',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'news',
    },
    {
      id: 7,
      title: 'DIRETTA: Risultati delle elezioni',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'politic',
    },
    {
      id: 8,
      title: 'Università italiana classificata quinta al mondo',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: true,
      type: 'education',
    },
    {
      id: 9,
      title: 'L\'Ungheria lascia l\'Unione Europea',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: false,
      type: 'politic',
    },
    {
      id: 10,
      title: 'Vendo Panda azzurra',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt vitae accusantium, inventore dolorem exercitationem aliquam? Porro laudantium illum quos nisi laboriosam labore. Repellat ab perspiciatis quaerat, cupiditate vitae impedit?',
      active: false,
      type: 'news',
    },
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
