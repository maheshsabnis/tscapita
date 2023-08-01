abstract class EmployeeLogic {
     salary:number;

    constructor(sal:number){
        this.salary = sal;
    }

    abstract calculateNetSalary():number;
}

class ManagerLogic extends EmployeeLogic {
    private ta:number;
    constructor(sal:number, ta:number){
        /* The super() will make call to the base class
          constructor and will pass the value to it
          so that it can be set to data-member of the private class 
        */
        super(sal);
        this.ta = ta;
    }

    /* Overriding the abstact method of the base class by providing the new iomplementation to it */

     calculateNetSalary(): number {
         return this.salary + this.ta;
     }
}

class ConsultantLogic extends EmployeeLogic {
    private ratePerHour:number;
    private workingHours:number;
    constructor(sal:number, rate:number, hrs:number){
        super(sal);
        this.ratePerHour = rate;
        this.workingHours = hrs;
    }

    /* Overriding the abstact method of the base class by providing the new iomplementation to it */

     calculateNetSalary(): number {
         return this.salary + (this.workingHours * this.ratePerHour);
     }
}
/* Gateway towards the System that is encapsulatig
the logic for calculating Income
*/
class IncomeCalculator {
    /*  Dynamic Polymorphism  */
    /* getIncome() a Facade method for Enterting into the System
      Encapsulated by the Abstract class
    */
    getIncome(emp:EmployeeLogic):number{

        console.log(`type of emp is = ${typeof(emp)}`);

        /* calculateNetSalary() is an atucal syatem */
        return emp.calculateNetSalary();
    }
}

let mgr = new ManagerLogic(12000,4000);
let income = new IncomeCalculator();

console.log(`Manager's Income  = ${income.getIncome(mgr)}`);

let consultant = new ConsultantLogic(30000, 2000,10);
console.log(`Consultant's Income = ${income.getIncome(consultant)}`);
