var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeLogic = /** @class */ (function () {
    function EmployeeLogic(sal) {
        this.salary = sal;
    }
    return EmployeeLogic;
}());
var ManagerLogic = /** @class */ (function (_super) {
    __extends(ManagerLogic, _super);
    function ManagerLogic(sal, ta) {
        var _this = 
        /* The super() will make call to the base class
          constructor and will pass the value to it
          so that it can be set to data-member of the private class
        */
        _super.call(this, sal) || this;
        _this.ta = ta;
        return _this;
    }
    /* Overriding the abstact method of the base class by providing the new iomplementation to it */
    ManagerLogic.prototype.calculateNetSalary = function () {
        return this.salary + this.ta;
    };
    return ManagerLogic;
}(EmployeeLogic));
var ConsultantLogic = /** @class */ (function (_super) {
    __extends(ConsultantLogic, _super);
    function ConsultantLogic(sal, rate, hrs) {
        var _this = _super.call(this, sal) || this;
        _this.ratePerHour = rate;
        _this.workingHours = hrs;
        return _this;
    }
    /* Overriding the abstact method of the base class by providing the new iomplementation to it */
    ConsultantLogic.prototype.calculateNetSalary = function () {
        return this.salary + (this.workingHours * this.ratePerHour);
    };
    return ConsultantLogic;
}(EmployeeLogic));
/* Gateway towards the System that is encapsulatig
the logic for calculating Income
*/
var IncomeCalculator = /** @class */ (function () {
    function IncomeCalculator() {
    }
    /*  Dynamic Polymorphism  */
    /* getIncome() a Facade method for Enterting into the System
      Encapsulated by the Abstract class
    */
    IncomeCalculator.prototype.getIncome = function (emp) {
        console.log("type of emp is = ".concat(typeof (emp)));
        /* calculateNetSalary() is an atucal syatem */
        return emp.calculateNetSalary();
    };
    return IncomeCalculator;
}());
var mgr = new ManagerLogic(12000, 4000);
var income = new IncomeCalculator();
console.log("Manager's Income  = ".concat(income.getIncome(mgr)));
var consultant = new ConsultantLogic(30000, 2000, 10);
console.log("Consultant's Income = ".concat(income.getIncome(consultant)));
