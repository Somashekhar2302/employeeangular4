
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employeeadd/employee.model';

@Component({
    selector: 'employee-delete',
    templateUrl: './employeedelete.component.html',
    styleUrls: ['./employeedelete.component.css']

})
export class EmployeeDeleteComponent implements OnInit {

    private employeeObj;
    model: Employee = new Employee();

    constructor(private dataService: DataService) {

    }

    deleteUser() {
        this.dataService.deleteUser(this.model.employeeID);
    }

    ngOnInit() {

    }
}

