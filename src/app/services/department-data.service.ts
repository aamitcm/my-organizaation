import { Injectable } from '@angular/core';
import { Department } from './model/department.model';

@Injectable()
export class DepartmentDataService {
    public departments: Department[];
    constructor() {
        this.departments = [];
    }

    public saveDepartment(department: Department) {
        if (department) {
            department.id = this.departments.length + 1;
            this.departments.push(department);
        }
    }

    public getDepartments(): Department[] {
        return this.departments;
    }
}
