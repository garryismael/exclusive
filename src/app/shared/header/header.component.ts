import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHeart, heroShoppingCart, heroBars3BottomRight } from '@ng-icons/heroicons/outline';

@Component({
  imports: [LogoComponent, NgIconComponent],
  providers: [provideIcons({ heroHeart, heroShoppingCart, heroBars3BottomRight })],
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
