import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidTruckFast } from '@ng-icons/font-awesome/solid';
import { matHeadsetMic } from '@ng-icons/material-icons/baseline';
import { bootstrapShieldCheck } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-shipping-info',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({ faSolidTruckFast, matHeadsetMic, bootstrapShieldCheck }),
  ],
  templateUrl: './shipping-info.component.html',
  styleUrl: './shipping-info.component.css',
})
export class ShippingInfoComponent {}
