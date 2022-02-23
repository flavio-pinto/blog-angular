import { Post } from './models/post';

let posts: Post[] = [
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

export function getPosts() {
  return posts;
}

export function getPost(idPost: number) {
  return posts.find((post) => post.id === idPost)
}

export function updatePost(data: Partial<Post>, id: number) {
  posts = posts.map((post) => (post.id == id ? { ...post, ...data } : post));
  return posts.find((post) => post.id == id) as Post;
}
