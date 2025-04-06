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
          getEmployees {
            id
            firstName
            lastName
            employeeId
          }
        }
      `
    });
  }

  getEmpById(id: string): Observable<any> {
    return this.apollo.query({
      query: gql`
        query($id: String!) {
          getEmployee(id: $id) {
            id
            firstName
            lastName
            employeeId
          }
        }
      `,
      variables: { id }
    });
  }

  addEmp(employee: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($firstName: String!, $lastName: String!, $employeeId: String!) {
          addEmployee(firstName: $firstName, lastName: $lastName, employeeId: $employeeId) {
            id
            firstName
            lastName
            employeeId
          }
        }
      `,
      variables: employee
    });
  }

  updateEmp(id: string, employee: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: String!, $firstName: String!, $lastName: String!, $employeeId: String!) {
          updateEmployee(id: $id, firstName: $firstName, lastName: $lastName, employeeId: $employeeId) {
            id
            firstName
            lastName
            employeeId
          }
        }
      `,
      variables: { id, ...employee }
    });
  }

  deleteEmp(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: String!) {
          deleteEmployee(id: $id) {
            id
          }
        }
      `,
      variables: { id }
    });
  }
}