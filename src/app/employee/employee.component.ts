import { Component, OnInit } from '@angular/core';
import { IEmployee } from '.././Interface/employee';
import { EmployeeService } from '.././Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employee: IEmployee;
 statusMessage: string = 'Loading data. Please wait...';
  constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

  ngOnInit() {
     let empCode: string = this._activatedRoute.snapshot.params['code'];
        this.employee=this._employeeService.getEmployeeByCode(empCode);        
    }

    onBackButtonClick() :void {
    this._router.navigate(['/employees']);
}
}