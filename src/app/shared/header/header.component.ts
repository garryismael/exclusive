import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroHeart,
  heroShoppingCart,
  heroBars3BottomRight,
  heroXMark,
} from '@ng-icons/heroicons/outline';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    LogoComponent,
    NgIconComponent,
    RouterLinkActive,
    RouterLink,
    CommonModule,
  ],
  providers: [
    provideIcons({
      heroHeart,
      heroShoppingCart,
      heroBars3BottomRight,
      heroXMark,
    }),
  ],
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  active: boolean = false;

  toggle(): void {
    this.active = !this.active;
  }

  getNavClasses() {
    return {
      active: this.active,
      inactive: !this.active,
    };
  }
}
