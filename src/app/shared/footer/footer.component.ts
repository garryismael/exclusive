import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandApple } from '@ng-icons/font-awesome/brands';
import { matSend } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent, NgOptimizedImage],
  providers: [provideIcons({ matSend, faBrandApple })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  today: Date = new Date();
}
