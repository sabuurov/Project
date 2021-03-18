import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {


  @ViewChild(BlogComponent, {static: false}) child: BlogComponent | undefined;

  constructor() { }

  blog: any | undefined;

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // @ts-ignore
    this.blog = this.child.blog;
  }
  // ngOnInit(): void {
  // }

}
