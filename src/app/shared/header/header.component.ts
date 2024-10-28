import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroHeart,
  heroShoppingCart,
  heroBars3BottomRight,
  heroXMark,
  heroUser,
} from '@ng-icons/heroicons/outline';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountMenuComponent } from '../account-menu/account-menu.component';

@Component({
  imports: [
    LogoComponent,
    NgIconComponent,
    RouterLinkActive,
    RouterLink,
    CommonModule,
    AccountMenuComponent,
  ],
  providers: [
    provideIcons({
      heroHeart,
      heroShoppingCart,
      heroBars3BottomRight,
      heroXMark,
      heroUser,
    }),
  ],
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menu: string = '';

  toggleMenu() {
    this.menu = this.menu === 'active' ? 'inactive' : 'active';
  }

  getNavClasses() {
    return {
      active: this.menu === 'active',
      inactive: this.menu === 'inactive',
    };
  }
}
