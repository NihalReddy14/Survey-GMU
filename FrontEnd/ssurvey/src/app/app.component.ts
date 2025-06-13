//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Campus Survey</a>
      <div>
        <a class="nav-link" routerLink="/survey-form">Student Survey</a>
        <a class="nav-link" routerLink="/survey-list">List All Surveys</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .navbar {
        margin-bottom: 20px;
      }
    `
  ]
})
export class AppComponent { }
