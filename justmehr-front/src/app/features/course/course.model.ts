import { ICourse } from './course.model';
export interface ICourse {
    id?: any;
    name?: string;
    duration?: number;
    startDate?: number;
}
export class Course implements ICourse {
   constructor(
    public id?: any,
    public name?: string,
    public duration?: number,
    public startDate?: number

   ) {
       this.id = id ? id : null;
       this.name = name ? name : null;
       this.duration = duration ? duration : null;
       this.startDate = startDate ? startDate : null;
   }
}
