import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {StudentComponent} from './student.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Welcome Angular</h1>
    <courses></courses>
    <student></student>
    `,
    directives: [CoursesComponent, StudentComponent]    
})
export class AppComponent { 
    
}