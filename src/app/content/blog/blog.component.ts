import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  // @Input('blog') type: string;
  // blog = 'Some text';
  // constructor() { }
  currentBlog = '';
  blog = [];
  constructor() { }
  // tslint:disable-next-line:typedef
  toContent() { // @ts-ignore
    this.blog.push(this.currentBlog); }
  //
  // ngOnInit(): void {
  // }
}
