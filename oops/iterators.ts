class MyIterator {
    /* A Custom Iterator Method */
    toList(values:Iterable<number>): number[] {
        return [...values];
    }

      
}

let ite = new MyIterator();

let vals = ite.toList([10,20,30,40]);
console.log(vals);

 


