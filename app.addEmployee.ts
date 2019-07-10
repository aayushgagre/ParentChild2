import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})


export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;

  
    empall:any[]=[
        {empId:1001,empName:"ABCD",empSalary:3333.33},
        {empId:1002,empName:"BCD",empSalary:3334.33},
        {empId:1003,empName:"CD",empSalary:3335.33}
    ];
    status:boolean=false;
    addEmployee():any{
            this.status=true;
        this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});     
      
    }

 
 
    
}