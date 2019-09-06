import { TestBed, async } from '@angular/core/testing';
import { EmployeeService } from '.././Services/employee.service';

describe('EmployeeServiceTest', () => {

    let employeeService;
  
      beforeEach(async(() => {

        employeeService=new EmployeeService();
      }));
  
      test('Should display a employee', () => {
        let employee=employeeService.getEmployeeByCode('emp101')
        expect(employee.code).toMatchSnapshot();
      });
  
      test('Should display a employee of code emp101 from the list', async(() => {
        let employeeList=employeeService.getEmployees();
        let emp=employeeList.filter(emp=>emp.code=='emp101')[0];
        expect(emp.code).toMatchSnapshot();
      }));
    });