import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login-component', pathMatch: 'full' },
  { path: 'login-component', component: LoginComponent },
  { path: 'signup-component', component: SignupComponent },
  { path: 'employee-component', component: EmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'view-employee/:id', component: ViewEmployeeComponent },
  { path: 'delete-employee/:id', component: DeleteEmployeeComponent }
];
