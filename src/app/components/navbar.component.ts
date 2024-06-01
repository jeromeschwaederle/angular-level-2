import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/jobs" routerLinkActive="active">JOBS</a>
        </li>
        <li>
          <a routerLink="/favorites" routerLinkActive="active">FAVORITES</a>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      width: 50%;
      text-align: center;
      background-color: #555555;
    }

    a {
      margin: 0;
      padding: 20px;
      width: 100%;
      color: white !important;
    }

    a:hover {
      cursor: pointer;
    }

    .active {
      background-color: #222;
    }
  `
})
export class NavbarComponent { }
