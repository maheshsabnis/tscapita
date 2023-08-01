class Stack<T> {
    /* Generic Data Member */
    private items:Array<T>;

    constructor(){
        this.items = new Array<T>();
    }
    /* Generic Method */
    push(item:T):void {
        this.items.push(item);
    }
 /* Generic Method */
    pop():T|undefined {
        return this.items.pop();
    }
 /* Generic Method */
    showItems():Array<T>{
        return this.items;
    }
}

let numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
numStack.push(30);
numStack.push(40);
numStack.push(50);
console.log(`Items in Number Stack = ${JSON.stringify(numStack.showItems())}`);
console.log(`Poped Values from Number Stack = ${numStack.pop()}`);
console.log(`After pop ooperation Items in Number Stack = ${JSON.stringify(numStack.showItems())}`);



