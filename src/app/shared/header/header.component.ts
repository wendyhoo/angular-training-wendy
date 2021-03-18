import { formatCurrency } from '@angular/common';
import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() headerTitle: string;

  navItems: string[] = ['Home', 'Form', 'About', 'Contact Us'];
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
