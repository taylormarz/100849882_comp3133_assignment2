import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private apollo: Apollo) {}

  getEmp(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          listAllEmployees {
            id
            first_name
            last_name
            email
            gender
            designation
            salary
            department
            date_of_joining
            employee_photo
          }
        }
      `,
      errorPolicy: 'all'
    });
  }

  getEmpById(eid: string): Observable<any> {
    return this.apollo.query({
      query: gql`
        query($eid: ID!) {
          searchEmployeeById(eid: $eid) {
            id
            first_name
            last_name
            email
            gender
            designation
            salary
            department
            date_of_joining
            employee_photo
          }
        }
      `,
      variables: { eid }
    });
  }

  addEmp(employee: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation (
          $first_name: String!
          $last_name: String!
          $email: String!
          $gender: String!
          $designation: String!
          $salary: Float!
          $department: String!
          $date_of_joining: String
          $employee_photo: String
        ) {
          createNewEmployee(
            first_name: $first_name
            last_name: $last_name
            email: $email
            gender: $gender
            designation: $designation
            salary: $salary
            department: $department
            date_of_joining: $date_of_joining
            employee_photo: $employee_photo
          ) {
            id
            first_name
            last_name
          }
        }
      `,
      variables: employee
    });
  }

  updateEmp(eid: string, employee: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation (
          $eid: ID!
          $first_name: String
          $last_name: String
          $email: String
          $gender: String
          $designation: String
          $salary: Float
          $department: String
          $date_of_joining: String
          $employee_photo: String
        ) {
          updateEmployeeById(
            eid: $eid
            first_name: $first_name
            last_name: $last_name
            email: $email
            gender: $gender
            designation: $designation
            salary: $salary
            department: $department
            date_of_joining: $date_of_joining
            employee_photo: $employee_photo
          ) {
            id
            first_name
            last_name
          }
        }
      `,
      variables: { eid, ...employee }
    });
  }

  deleteEmp(eid: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($eid: ID!) {
          deleteEmployeeById(eid: $eid)
        }
      `,
      variables: { eid }
    });
  }
}
