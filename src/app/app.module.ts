import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NewsComponent,
    CategoriesComponent,
    BlogComponent,
    PagesComponent,
    SportComponent,
    CultureComponent,
    PoliticsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
