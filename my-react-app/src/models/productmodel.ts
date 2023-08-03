export class Product {
    /* an Indexer that will be used to read keys as indexes
      for class
     */
    /* x will be the 'name' of the property which will
      always be a string and actula datatype of x can be 
      number, string, etc. so set the type of 'x' indexer as 'any'
    */
    [x:string]:any; /* Iterator Creation */
    constructor(
        public ProductId:number,
        public ProductName:string,
        public CategoryName:string,
        public Manufacturer: string,
        public Price: number
    ){}
}