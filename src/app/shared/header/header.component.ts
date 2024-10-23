import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHeart, heroShoppingCart, heroBars3BottomRight } from '@ng-icons/heroicons/outline';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [LogoComponent, NgIconComponent, RouterLinkActive, RouterLink],
  providers: [provideIcons({ heroHeart, heroShoppingCart, heroBars3BottomRight })],
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
