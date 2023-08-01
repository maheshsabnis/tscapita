interface IOperation {
    add(a:number, b:number):number;
    sub(a:number, b:number):number;
}

class Mathematics implements IOperation {
   add(a: number, b: number): number {
        return a + b;
    }
    sub(a: number, b: number): number {
        return a-b;
    }
}

let m = new Mathematics();
console.log(`Add = ${m.add(10,20)}`);
console.log(`Sub = ${m.sub(10,20)}`);