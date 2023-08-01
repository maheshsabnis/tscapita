// Lets add an function object that will perform following
// 1. take source object: The Object which will contain overloaded methods
// 2. name: The name of the method
// 3. fn: The dynamically parsed function

function overload(sourceObject, name, fn){
    // enabling the overloading
    if(!sourceObject._overload){
        sourceObject._overload = {};
    }

    // enabling object that will use 'same-function-name' with multiple parameters
    if(!sourceObject._overload[name]) {
        sourceObject._overload[name] = {};
    }

    // enable the object to generate, dynamic implementation for
    // same method in object with multiple parameters
    // fn: Is the dynamic function with multiple parameters and with implementation
    if(!sourceObject._overload[name][fn.length]) {
        sourceObject._overload[name][fn.length] = fn;
    }

    // finally, ask the JS Parser to invoke and execute the function
    // with arguments and implementation
    // the function will be generated with dynamic arguments
    // and will be invoked using apply() method by substituting the current object with
    // an arguments array
    sourceObject[name] = function(){
        if(this._overload[name][arguments.length]){
            return this._overload[name][arguments.length].apply(this,arguments)
        }
    }
}


function Students(){
    let students =[
        {StudentId:1, StudentName: 'Ajay', Year: 'First', Status: 'Passed'},
        {StudentId:2, StudentName: 'Bjay', Year: 'Second', Status: 'Failed'},
        {StudentId:3, StudentName: 'Cjay', Year: 'First', Status: 'Promoted'},
        {StudentId:4, StudentName: 'Djay', Year: 'Second', Status: 'Passed'},
        {StudentId:5, StudentName: 'Ejay', Year: 'First', Status: 'Failed'},
        {StudentId:6, StudentName: 'Fjay', Year: 'Second', Status: 'Promoted'},
        {StudentId:7, StudentName: 'Gjay', Year: 'First', Status: 'Passed'},
        {StudentId:8, StudentName: 'Ijay', Year: 'Second', Status: 'Failed'},
        {StudentId:9, StudentName: 'Jjay', Year: 'First', Status: 'Promoted'},
        {StudentId:10, StudentName: 'Kjay', Year: 'Second', Status: 'Passed'},
        {StudentId:11, StudentName: 'Ljay', Year: 'First', Status: 'Failed'}
    ];

    // two method to find() students records
    // 1. All Students
    // 2. List All Students by Status
    // sourceObject: this i.e. the 'Students' function object
    // name: 'find()' the name of the function
    // fn: is the function with implementation
    // internally: find(){return students;}
    overload(this, "find", function(){
        return students;
    });

      // internally: find(){
          // let result  = students.filter((std,idx)=>{
        //     return std.Status === status;
        // });
    //}
    overload(this, "find", function(status){
        let result  = students.filter((std,idx)=>{
            return std.Status === status;
        });
        return result;
    });
   
}


// When the Students function is instantiated,
// the function will be executing state and
// all function level declarations will be immediately invoked
// e.g. overload() will be always in executing state
let obj = new Students();

let allStudents = obj.find(); // return all students
console.log(`All Students ${JSON.stringify(allStudents)}`);
console.log(obj.find);


let passedStudents = obj.find('Passed'); // return only passed students
console.log(`Pass Students ${JSON.stringify(passedStudents)}`);