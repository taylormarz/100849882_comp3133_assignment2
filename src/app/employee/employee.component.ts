import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  a = 100 // .local
  @Input("e") employee:any // ("e") = exposed property, 
  // see app.component.html for how this changes code
}
