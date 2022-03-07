import { Injectable } from '@angular/core';
import    data from './../../app/data.json';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList = data;

  constructor() {}

  
getProducts():any{
   return this.courseList;
}

}
