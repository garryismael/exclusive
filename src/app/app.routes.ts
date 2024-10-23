import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { RootComponent } from './pages/root/root.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          { path: 'sign-up', component: SignUpComponent },
          { path: 'sign-in', component: SignInComponent },
        ],
      },
    ],
  },
];
