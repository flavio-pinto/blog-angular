import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { ActivePostComponent } from './pages/active-post.component';
import { InactivePostComponent } from './pages/inactive-post.component';
import { Route, RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar.component';
import { PostCardComponent } from './components/post-card.component';
import { DetailPostComponent } from './pages/detail-post.component';

const routes: Route[] =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-post',
    component: ActivePostComponent,
    children: [
      {
        path: ':id',
        component: DetailPostComponent
      }
    ]
  },
  {
    path: 'detail-post/:id',
    component: DetailPostComponent
  },
  {
    path: 'inactive-post',
    component: InactivePostComponent,
    children: [
      {
        path: ':id',
        component: DetailPostComponent
      }
    ]
  },
  {
    path: 'detail-post/:id',
    component: DetailPostComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostComponent,
    InactivePostComponent,
    NavBarComponent,
    PostCardComponent,
    DetailPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
