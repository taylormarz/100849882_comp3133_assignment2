import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrls: ['../employee/employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  eid: string | null = null;
  employee: any = {
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
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.eid = this.route.snapshot.paramMap.get('id');
    if (this.eid) {
      this.employeeService.getEmpById(this.eid).subscribe({
        next: (res) => {
          this.employee = res.data.searchEmployeeById;
        },
        error: (err) => {
          console.error('Error loading employee:', err);
        }
      });
    }
  }

  updateEmployee(): void {
    if (!this.eid) return;
    this.employeeService.updateEmp(this.eid, this.employee).subscribe({
      next: () => {
        alert('Employee updated!');
        this.router.navigate(['/employee-component']);
      },
      error: (err) => {
        console.error('Error updating employee:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/employee-component']);
  }
}
