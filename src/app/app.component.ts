import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-root',
  template: `
    <!-- Components go here -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
  
}