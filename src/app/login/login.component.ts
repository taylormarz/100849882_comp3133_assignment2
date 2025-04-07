import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private apollo: Apollo) {}

  onLogin(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    const LOGIN_USER = gql`
      query ($email: String, $password: String!) {
        loginUser(email: $email, password: $password) {
          message
          user {
            id
            username
            email
          }
        }
      }
    `;

    this.apollo.query({
      query: LOGIN_USER,
      variables: {
        email: this.email,
        password: this.password
      },
      fetchPolicy: 'no-cache'
    }).subscribe({
      next: (res: any) => {
        const user = res.data.loginUser.user;
        alert(`Welcome ${user.username}!`);
        this.router.navigate(['/employee-component']);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Login failed.';
        console.error('Login error:', err);
      }
    });
  }

  goToSignup(): void {
    this.router.navigate(['/signup-component']);
  }
  
}

