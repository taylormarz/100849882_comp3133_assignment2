import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apollo: Apollo, public router: Router) {}

  onSignup(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    const CREATE_USER = gql`
      mutation (
        $username: String!
        $email: String!
        $password: String!
      ) {
        createUser(
          username: $username
          email: $email
          password: $password
        ) {
          id
          username
          email
        }
      }
    `;

    this.apollo.mutate({
      mutation: CREATE_USER,
      variables: {
        username: this.username,
        email: this.email,
        password: this.password
      }
    }).subscribe({
      next: () => {
        this.successMessage = 'Account created! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login-component']), 1500);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Account creation failed.';
        console.error('Signup error:', err);
      }
    });
  }
}
