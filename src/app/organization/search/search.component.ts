import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DepartmentDataService } from 'src/app/services/department-data.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    selectedCriteria = '';
    constructor(
        private departmentDataService: DepartmentDataService,
        private dataService: DataService
    ) {

    }
    ngOnInit(): void {

    }

    public getData(): void {
        if (this.selectedCriteria === 'getalldept') {
            const departments = this.departmentDataService.getDepartments();
            console.log(departments);
        }
    }
}
