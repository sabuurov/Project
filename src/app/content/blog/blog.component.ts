import {Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // @Input('blog') type: string;
  blog = 'Some text';
  constructor() { }

  ngOnInit(): void {
  }
}
