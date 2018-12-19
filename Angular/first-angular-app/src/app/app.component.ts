import { Component } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  template: `
   <div *ngFor="let c of listofcourses">
     <course [coursedetails]="c"></course>
   </div>   
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  // courseOne:string="React";
  // courseTwo:string="Node";
  listofcourses: Course[] = [
    new Course('React', "3 Days", 3000, "https://qph.fs.quoracdn.net/main-qimg-c717d7c6c7f2bfe300846477b3aa9fcf"),
    new Course('Python', '4 Days', 2000, "https://www.python.org/static/opengraph-icon-200x200.png"),
    new Course("Node", "5 Days", 7000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rJSHmrqjm-ORMFCf7joDCNUMUo0aLeGiLg75IVqm14fmboqj")
  ];
}