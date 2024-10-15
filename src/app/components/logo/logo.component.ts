import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
