import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit{
    @Input()
  employee: Employee = new Employee;
  constructor() {}
 @Output() employeeDelete : EventEmitter<Employee>=new EventEmitter();
  ngOnInit(): void {
    
  }
  onClick(employee: Employee){
    this.employeeDelete.emit(employee)
    console.log("delete Employee")
  }
}
