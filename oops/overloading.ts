class Overloading {
    add(a:number,b:number):number;
    /* Optional Parameter */
    add(a:string,b:string,c?:string):string;
    add(v1:any,v2:any,c?:string):any {
        if(typeof c !== undefined){
            return v1 + v2 + c;
        }
        return v1 + v2;
    }
}

let o1 = new Overloading();

console.log(`For Strings = ${o1.add('Mahesh','Sabnis')}`);
console.log(`For Numbers = ${o1.add(100,200)}`);