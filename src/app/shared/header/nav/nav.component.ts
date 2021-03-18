import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() navList: string[];

  activeMenu: string = 'Home';
  constructor() {}

  ngOnInit(): void {}
  onNavClick(menuItem: string): void {
    this.activeMenu = menuItem;
  }
}
