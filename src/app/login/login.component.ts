import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // route for login button (will change this to have authentication)
  constructor(private router: Router){}

  onLogin(): void{
    this.router.navigate(['/employee-component']);
  }
}
