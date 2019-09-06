import { TestBed, async } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '.././Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('EmployeeComponentTest', () => {

  let fixture;
  let employeeService;
  let employeeInstance;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
            EmployeeComponent
        ],
        providers:[EmployeeService, {
          provide: ActivatedRoute, useValue: {
            snapshot:{
              params: 
              { 
                code: 'emp101' 
              }
            }
           
          }
        },
        {
          provide: Router, useValue: {
            navigate: ['/employees']
          }
        }
      ]
      }).compileComponents();

      fixture=TestBed.createComponent(EmployeeComponent);
      employeeInstance = fixture.componentInstance;
      employeeService=new EmployeeService();
    }));

    test('Should display a employee', () => {
      expect(employeeInstance._activatedRoute.snapshot.params.code).toMatchSnapshot();
    });

    test('Should display a employee of code emp101', async(() => {
      let emp={
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '6/25/1988'
    }
      expect(emp.code).toMatchSnapshot();
    }));
  });