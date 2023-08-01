class Customer {
    constructor(
        public CustomerId:number,
        public CustomerName:string
    ){}
}
class CustomerLogic {
    private customers:Array<Customer>;
    constructor(){
        this.customers = new Array<Customer>();
        this.customers.push(new Customer(101, 'C1'));
        this.customers.push(new Customer(102, 'C2'));
    }
    getCustomers():Array<Customer> {

        return this.customers;

    }
    addCustomer(cust: Customer):Array<Customer> {
        if(!this.validate(cust))
            throw new Error('The Data is invalid');
        this.customers.push(cust);
        return this.customers;
    }

    private validate(cust:Customer):boolean{
        let isValid = true;

        if(cust.CustomerId <=0 || cust.CustomerName.length === 0 || cust.CustomerName[0] === ' '){
            isValid = false; 
        }

        return isValid;
    }
}

class UIGenerator {
    generateTable(values:Array<any>):string {

        if(values.length === 0 || values === undefined){
            return `No Data to Show`;
        } 
        let table = `<table class="table table-bordered table-striped">`;

        // 1. Read 0th index of the array and extract the keys of the object of the 0th index
        let columns = Object.keys(values[0]);

        // 2. Generate headers
        let tr = `<thead> <tr>`;
        columns.forEach((c,idx)=>{
            tr+= `<th>${c}</th>`
        });
        tr+=`</tr></thead>`;
        table+= tr;
        let tbody = `<tbody>`;
        values.forEach((row,index)=>{
            tbody += `<tr>`;
                columns.forEach((c,idx)=>{
                    tbody+= `<td>${row[c]}</td>`
                });
            tbody += `</tr>`;
        });
        tbody+=`</tbody>`;

        table+=tbody;
        
        table += `</table>`;
        return table;
    }
}

