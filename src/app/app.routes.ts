import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard-component/dashboard-component.component'

export const routes: Routes = [
	{ path: '', redirectTo: 'login-component', pathMatch: 'full' },
	{ path: 'login-component', component: LoginComponent },
	{ path: 'signup-component', component: SignupComponent },
	{ path: 'employee-component', component: EmployeeComponent },
];