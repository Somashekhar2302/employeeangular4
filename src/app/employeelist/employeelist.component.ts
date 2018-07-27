import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeadd/employee.model'
import { DataService } from '../data.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'employee-list',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employeeList: Employee[];
  private columns: any[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.employeeList = this.dataService.getUsers();
    this.columns = this.dataService.getColumns();
  }
}