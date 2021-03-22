import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { Department } from 'src/app/services/model/department.model';

import { EmployeeModel } from 'src/app/services/model/employee.model';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    employee: EmployeeModel;

    constructor(
        private dataService: DataService,
        private departmentDataService: DepartmentDataService) {
    }
    ngOnInit(): void {
        this.employee = new EmployeeModel();
    }

    public onSave(): void {
        if (this.validateEmployee()) {
            this.dataService.addEmployee(this.employee);
        }
    }

    private validateEmployee(): boolean {
        if (this.employee.name && this.employee.name.trim() !== '') {
            alert('Name is required.');
            return false;
        }
        if (this.employee.departmentId && this.employee.departmentId === 0) {
            alert('Department is required');
            return false;
        }
        return true;
    }

    public get managers(): EmployeeModel[] {
        return this.dataService.getManagers();
    }

    public get departments(): Department[] {
        return this.departmentDataService.getDepartments();
    }
}
