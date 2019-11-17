import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from 'src/app/layouts/navbar/navbar.route';

const LAYOUT_ROUTES = [navbarRoute];

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  ...LAYOUT_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
