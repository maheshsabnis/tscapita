/* defining a class */
var Employee = /** @class */ (function () {
    function Employee(eno, ename) {
        this.empNo = eno;
        this.empName = ename;
    }
    Employee.prototype.getEmp = function () {
        console.log("EmpNo : ".concat(this.empNo, " and EmpName : ").concat(this.empName));
    };
    return Employee;
}());
/* Lets acees */
var e1 = new Employee(101, 'Mahesh');
e1.getEmp();
