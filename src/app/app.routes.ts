import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'login-component', pathMatch: 'full' },
	{ path: 'login-component', component: LoginComponent },
	{ path: 'signup-component', component: SignupComponent },
	{ path: 'employee-component', component: EmployeeComponent },
	{ path: 'add-employee', component: EmployeeComponent },
	{ path: 'edit-employee/:id', component: EmployeeComponent },
	{ path: 'view-employee/:id', component: EmployeeComponent }
];