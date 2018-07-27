
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from './employee.model';

@Component({
    selector: 'employee-add',
    templateUrl: './employeeadd.component.html',
    styleUrls: ['./employeeadd.component.css']

})
export class EmployeeAddComponent implements OnInit {

    private employeeObj;
    model: Employee = new Employee();

    constructor(private dataService: DataService) {

    }

    addUser() {
        let bodyObj = [
            {
                "usersso": this.model.userSSO,
                "username": this.model.userName,
                "employeeid": this.model.employeeID,
                "location": this.model.location,
                "backgroundflag": this.model.backGroundFlag,
                "joindate": "2011-09-14"
            }
        ]
        this.dataService.addUser(bodyObj);
    }

    ngOnInit() {

    }
}

