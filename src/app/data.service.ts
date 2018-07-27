import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Employee } from './employeeadd/employee.model';

@Injectable()
export class DataService {

  result: any;
  cols: any[];
  private employeeList: Employee[]

  constructor(private _http: Http) {
    this.employeeList = []
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'usersso', header: 'User SSO' },
      { field: 'employeeid', header: 'Emp ID' },
      { field: 'location', header: 'Location' },
      { field: 'backgroundflag', header: 'Background check Flag' },
      { field: 'joindate', header: 'Join Date' }
    ]
  }


  addUser(employeeObj) {
    //console.log('employeeObj :' + JSON.stringify(employeeObj));
    this._http.post('http://localhost:3000/api/employee/create', employeeObj,
    )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in addUser()");
        }
      );
  }

  deleteUser(employeeID) {
    //console.log('employeeObj :' + JSON.stringify(employeeObj));
    this._http.get('http://localhost:3000/api/employee/delete/' + employeeID)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in addUser()");
        }
      );
  }


  getUsers() {
    this._http.get('http://localhost:3000/api/employee/list').subscribe(response => {
      let userdata = [];
      if (response.json().hits && response.json().hits.hits) {
        userdata = response.json().hits.hits;
        if (userdata.length > 0) {
          userdata.forEach(user => {
            this.employeeList.push(user._source);
            //console.log(user._source);
          });
        }
      }
    },
      err => {
        console.log("Error occured in getUsers()");
      }
    )
    return this.employeeList;
  }
  getColumns(): string[] {
    return this.cols
  };
}