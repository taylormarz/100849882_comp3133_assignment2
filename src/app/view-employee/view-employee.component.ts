import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/service/employee.service';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-employee.component.html',
  styleUrls: ['../employee/employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmpById(id).subscribe({
        next: (res) => {
          this.employee = res.data.searchEmployeeById;
        },
        error: (err) => {
          console.error('Failed to fetch employee:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/employee-component']);
  }
}