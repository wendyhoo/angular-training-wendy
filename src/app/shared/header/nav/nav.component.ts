import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_NOT_FOUND, PAGE_ROUTES_MAP } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() navList: string[];

  activeMenu: string = 'Home';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavClick(menuItem: string): void {
    this.activeMenu = menuItem;
    // const routeItem = PAGE_ROUTES.find((r: any) => r.label === menuItem);
    this.router.navigate([PAGE_ROUTES_MAP[menuItem] ?? PAGE_NOT_FOUND]);
  }
}
