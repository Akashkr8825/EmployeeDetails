import { Component, OnInit } from '@angular/core';
import { Employee } from "../../Employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  employee: Employee[];     
  constructor(){
    this.employee =[
      { 
        id:1,
        name:"akash",
        age:22,
        designation:"IT",
        address:"BTM",
        active: true
      },
      { 
        id:2,
        name:"aarush",
        age:23,
        designation:"IIT",
        address:"MP",
        active: true
      },
      { 
        id:3,
        name:"ravi",
        age:25,
        designation:"ME",
        address:"DHN",
        active: true
      },
      { 
        id:4,
        name:"mukul",
        age:20,
        designation:"EEE",
        address:"DH",
        active: true
      },
      { 
        id:5,
        name:"MUKESH",
        age:25,
        designation:"ME",
        address:"DHN",
        active: true
      },
      { 
        id:6,
        name:"rahul",
        age:27,
        designation:"xyz",
        address:"DHN",
        active: true
      },
      { 
        id:7,
        name:"abc",
        age:25,
        designation:"ME",
        address:"DHN",
        active: true
      },
      { 
        id:8,
        name:"aaa",
        age:25,
        designation:"ME",
        address:"DHN",
        active: true
      },
      { 
        id:9,
        name:"wxy",
        age:25,
        designation:"ME",
        address:"BTM",
        active: true
      },
      { 
        id:10,
        name:"varun",
        age:25,
        designation:"BSC",
        address:"JH",
        active: true
      }
    ]
  }

       ngOnInit(): void{}
       deleteEmployee(employee:Employee){
        console.log(employee)
        const index=this.employee.indexOf(employee);
        this.employee.splice(index,1)
       }
}
// 1:06:40