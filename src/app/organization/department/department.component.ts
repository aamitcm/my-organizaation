import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { Department } from 'src/app/services/model/department.model';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
    department: Department = { id: 0, name: '' };
    constructor(private departmentDataService: DepartmentDataService) {

    }
    ngOnInit(): void {

    }

    public onSave(): void {
        if (this.department.name.trim() === '') {
            alert('Department name is required.');
            return;
        }
        this.departmentDataService.saveDepartment(this.department);
        this.department = { id: 0, name: '' };
    }
}
