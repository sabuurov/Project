import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ContentService {
  contents: string[] = [];


  // tslint:disable-next-line:typedef
  add(content: string) {
    this.contents.push(content);
  }
  // tslint:disable-next-line:typedef
  clear() {
    this.contents = [];
  }
}
