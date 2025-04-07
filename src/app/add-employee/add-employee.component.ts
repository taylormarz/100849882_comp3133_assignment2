import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/service/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrls: ['../employee/employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    designation: '',
    salary: 0,
    department: '',
    date_of_joining: '',
    employee_photo: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  submitEmployee(): void {
    this.employeeService.addEmp(this.newEmployee).subscribe({
      next: () => {
        alert('Employee added!');
        this.router.navigate(['/employee-component']);
      },
      error: (err) => {
        console.error('Error adding employee:', err);
      }
    });
  }
}

