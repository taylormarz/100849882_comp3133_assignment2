import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  isAddMode = false;

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

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const path = segments.map(s => s.path).join('/');
      this.isAddMode = path.includes('add-employee');

      if (!this.isAddMode) {
        this.getEmployees();
      }
    });
  }

  getEmployees(): void {
    this.employeeService.getEmp().subscribe({
      next: (response) => {
        this.employees = response.data.listAllEmployees;
      },
      error: (error) => {
        console.error('Error loading employees:', error);
      }
    });
  }

  submitEmployee(): void {
    this.employeeService.addEmp(this.newEmployee).subscribe({
      next: () => {
        alert('Employee added!');
        this.router.navigate(['/employee-component']);
      },
      error: (error) => {
        console.error('Error adding employee:', error);
      }
    });
  }

  addEmployee(): void {
    this.router.navigate(['/add-employee']);
  }

  viewEmployee(id: string): void {
    this.router.navigate([`/view-employee/${id}`]);
  }  

  editEmployee(id: string): void {
    this.router.navigate([`/edit-employee/${id}`]);
  }

  deleteEmployee(id: string): void {
    this.router.navigate([`/delete-employee/${id}`]);
  }
  
}
