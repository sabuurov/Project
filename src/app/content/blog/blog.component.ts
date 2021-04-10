import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../guardservices/blog-guard-service.service';
import {UrlTree} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements CanComponentDeactivate{
  // @Input('blog') type: string;
  // blog = 'Some text';
  // constructor() { }
  currentBlog = '';
  blog = [];
  constructor() { }
  // tslint:disable-next-line:typedef
  toContent() { // @ts-ignore
    this.blog.push(this.currentBlog); }

  // @ts-ignore
  canDeactivate(): | boolean{
    if (confirm('Do you wish to Please confirm')) {
      return true;
    } else {
      return false;
    }
  }
  //
  // ngOnInit(): void {
  // }

}
