import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/service/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-employee.component.html',
  styleUrls: ['../employee/employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employee: any;
  eid: string | null = null;

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

  deleteEmployee(): void {
    if (!this.eid) return;

    if (confirm('Are you sure you want to delete this employee? This cannot be undone.')) {
      this.employeeService.deleteEmp(this.eid).subscribe({
        next: () => {
          alert('Employee deleted.');
          this.router.navigate(['/employee-component']);
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/employee-component']);
  }
}
