import { Component, HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUser } from '@ng-icons/heroicons/outline';
import { lucideShoppingBag, lucideCircleX, lucideStar } from '@ng-icons/lucide';
import { matLogOut } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-account-menu',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      heroUser,
      lucideShoppingBag,
      lucideCircleX,
      lucideStar,
      matLogOut,
    }),
  ],
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.css',
})
export class AccountMenuComponent {
  isOpen: boolean = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('dropdown-button')) {
      this.isOpen = false;
    }
  }
}
