import { Component, OnInit } from '@angular/core';
import { NavBarDirective } from '../directives/nav-bar.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 // providers: [NavBarDirective]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
