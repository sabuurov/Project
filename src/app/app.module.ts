import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
// import { PipesComponent } from './pipes/pipes.component';
import {CurrConverterPipe} from './pipes/curr-converter.pipe';
import { NewComponentDirectiveComponent } from './new-component-directive/new-component-directive.component';
import {BlogGuardService} from './guardservices/blog-guard-service.service';

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
    PoliticsComponent,
    // PipesComponent,
    CurrConverterPipe,
    NewComponentDirectiveComponent,
    // FormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BlogGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
