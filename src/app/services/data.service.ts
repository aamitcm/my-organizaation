import { Injectable } from '@angular/core';
import { EmployeeModel } from './model/employee.model';

@Injectable()
export class DataService {
    private _employees: EmployeeModel[];

    public get employees(): EmployeeModel[] {
        return this._employees;
    }

    public addEmployee(employee: EmployeeModel): void {
        if (this._employees) {
            this.employees.push(employee);
        }
    }

    public getEmployeesByManager(managerId: number): EmployeeModel[] {
        if (this._employees) {
            return this._employees.filter(x => x.managerId === managerId);
        } else {
            return [];
        }
    }

    public getManagers(): EmployeeModel[] {
        if (this._employees) {
            return this._employees.filter(x => x.isManager);
        } else {
            return [];
        }
    }
}
