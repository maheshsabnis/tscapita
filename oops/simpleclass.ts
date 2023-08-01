/* defining a class */

class Employee {
    /* Data Members */
    private empNo:number;
    private empName:string;

    constructor(eno:number, ename:string){
        this.empNo = eno;
        this.empName = ename;
    }

    getEmp():void {
        console.log(`EmpNo : ${this.empNo} and EmpName : ${this.empName}`);
    }
} 

/* Lets acees */
let e1 = new Employee(101, 'Mahesh');
e1.getEmp();