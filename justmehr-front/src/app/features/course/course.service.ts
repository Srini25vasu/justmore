import { SERVER_API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public resorceUrl = SERVER_API_URL + 'api/courses';

  constructor(http: HttpClient) { }

  
}
