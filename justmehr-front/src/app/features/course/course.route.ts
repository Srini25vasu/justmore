import { Route } from '@angular/router';
import { CourseComponent } from 'src/app/features/course/course.component';

export const courseRoute: Route = {
  path: 'courses',
  component: CourseComponent,
  outlet: 'main'
} ;
