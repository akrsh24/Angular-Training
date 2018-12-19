import {Component, Input} from '@angular/core';
import { Course } from './course.model';

@Component({
    selector:`course`,
    templateUrl:`./course.template.html`
    //interpolation or expression
})

export default class CourseComponent{
     @Input()  coursedetails:Course={name:"Angular",price:500}; //passing default-value of coursename as Angular
}