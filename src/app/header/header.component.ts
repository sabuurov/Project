import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toDate: Date = new Date();
  title = 'Individual project';
  dollar!: number;
  tenge!: number;
  choice = 'Formatted';
  constructor() { }
  ngOnInit(): void {
  }

}
