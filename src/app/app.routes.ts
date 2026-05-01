import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: Home },
  { path: 'courses', component: Home },
  { path: 'contact', component: Home },
  { path: '**', redirectTo: '' },
];
