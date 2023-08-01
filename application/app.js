var Customer = /** @class */ (function () {
    function Customer(CustomerId, CustomerName) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
    }
    return Customer;
}());
var CustomerLogic = /** @class */ (function () {
    function CustomerLogic() {
        this.customers = new Array();
        this.customers.push(new Customer(101, 'C1'));
        this.customers.push(new Customer(102, 'C2'));
    }
    CustomerLogic.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerLogic.prototype.addCustomer = function (cust) {
        if (!this.validate(cust))
            throw new Error('The Data is invalid');
        this.customers.push(cust);
        return this.customers;
    };
    CustomerLogic.prototype.validate = function (cust) {
        var isValid = true;
        if (cust.CustomerId <= 0 || cust.CustomerName.length === 0 || cust.CustomerName[0] === ' ') {
            isValid = false;
        }
        return isValid;
    };
    return CustomerLogic;
}());
var UIGenerator = /** @class */ (function () {
    function UIGenerator() {
    }
    UIGenerator.prototype.generateTable = function (values) {
        if (values.length === 0 || values === undefined) {
            return "No Data to Show";
        }
        var table = "<table class=\"table table-bordered table-striped\">";
        // 1. Read 0th index of the array and extract the keys of the object of the 0th index
        var columns = Object.keys(values[0]);
        // 2. Generate headers
        var tr = "<thead> <tr>";
        columns.forEach(function (c, idx) {
            tr += "<th>".concat(c, "</th>");
        });
        tr += "</tr></thead>";
        table += tr;
        var tbody = "<tbody>";
        values.forEach(function (row, index) {
            tbody += "<tr>";
            columns.forEach(function (c, idx) {
                tbody += "<td>".concat(row[c], "</td>");
            });
            tbody += "</tr>";
        });
        tbody += "</tbody>";
        table += tbody;
        table += "</table>";
        return table;
    };
    return UIGenerator;
}());
