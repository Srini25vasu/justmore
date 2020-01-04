
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from 'src/app/layouts/navbar/navbar.route';
import { CourseComponent } from 'src/app/features/course/course.component';
import { TrainerComponent } from 'src/app/features/trainer/trainer.component';

const LAYOUT_ROUTES = [navbarRoute];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'trainers',
    component: TrainerComponent
  },
  ...LAYOUT_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


