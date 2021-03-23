import { formatCurrency } from '@angular/common';
import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PAGE_ROUTES_MAP } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() headerTitle: string;

  navItems: string[] = Object.keys(PAGE_ROUTES_MAP);
  showNav: boolean = true;

  constructor() {}

  // ngOnChanges():void{
  //   console.log('ngOnChanges run');
  // }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.headerTitle = 'new title'
    // }, 5000)
  }
  ngOnDestroy(): void {
    // formatCurrency.();
  }
}
