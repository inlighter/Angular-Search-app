import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <main>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
  }
}
