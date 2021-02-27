import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './content/news/news.component';
import { CategoriesComponent } from './content/categories/categories.component';
import { BlogComponent } from './content/blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { SportComponent } from './pages/sport/sport.component';
import { CultureComponent } from './pages/culture/culture.component';
import { PoliticsComponent } from './pages/politics/politics.component';

const routes: Routes = [
  { path: 'sport', component: SportComponent },
  { path: 'politics', component: PoliticsComponent},
  { path: 'culture', component: CultureComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
