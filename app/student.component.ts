import {Component} from "angular2/core";
import {StudentService} from "./student.service";

@Component({
    selector: 'students',
    template: `
    <h2>Students</h2>
     <ul>
        <li *ngFor="#student of students">
        {{ student }}
        </li>
     </ul>
     `,
     providers: [StudentService]
})

export class StudentComponent {

    students: String[];

    constructor(studentService: StudentService){
        this.students = studentService.getStudents();
    }

}