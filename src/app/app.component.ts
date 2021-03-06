import {Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BlogComponent} from './content/blog/blog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Project';
  name = 'User';
  num: number = 0;
  @ViewChild(BlogComponent)
  child!: BlogComponent;
  blog = 'Some text';
}
