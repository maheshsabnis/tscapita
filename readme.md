# TypeScript

- Creating Project
    - VS Code
    - Node.js Runtime

- Install the TypeScript
    - npm install --global typescript
    -       OR UBUNTU (Linux) and macOS
    - sudo npm install --global typescript     

    - The 'tsc' transpiler
        - The transpiler is an engine that is used to Compiled-Transform the Htigh-Level JavaScript (TypeScript) to Browser Compatible JavaScript

    - Add the 'package.json' file in the project
        - The module dependency list file, that contains package (current-project) informaiton
        - COmmand to create package.json
            - npm init -y
                - denerate package.json with defaults
        - The 'script' block
            - Define JSON object that contains commands for Build, Test, and Run the application
        - The 'devDependencies' block
            - Contains list of all Developer Dependencies e.g. typescript
        - The 'dependencies' block
            - Contains List of all Runtime production dependencies     

    - The 'tsc --init' command
        - This will generate 'tsconfiog.json'
        - This filw will be used by 'tsc' transpiler that defines rule for folowing
            - The 'target' JS library to which typescript code will be transpiled
            - The 'moduleresoultion', the Node.js path mapped to discover, load and cache module that is nbeeded by the application
            - The 'strict' rule for making type declaration (variable, method, class, return type, etc.) mandatory   
        - ES 6 (Base Standard) 
            - ES 7, ES 8, ES 9, ES 10, ES 11, ESnext  
            - Libraries
                - ES2015, ES2016, ES2017, .....

        - target: es2016
            - The Target Code Compatibility after transpiling the code
        - module: commonjs / type:module (new ES6+ approach of loading Modules in Node.js)
             - The default Module Loading Standard while development and deployment
        strict: true
            - The Type Declaration is Mandatory, else the code won't be transpiled
        esModuleInterop: true
            - Interoperability with othe JS Module System
        skipLibCheck: true | false
            - ES Libv Version Check MUST be done while folloowing are implemented
                - Interoperability
                - Use of TypeSCript in MicroFrontEnd Apps
                - Integrating with Node.js 
        forceConsistentCasingInFileNames: true       
            - ES Guidelines MUST be followed for:
                - variable declaration, LOWER CASE
                - function declaration, camelCase
                - class declaration, Pascal case  

# Programming with TypeScript
- DataTypes
    - Number, number
    - String, string
    - Boolean, boolean
    - Void, void
        - Used on function  to inform to the transpiler that the function is one-way
    - Null, null
        - The Object does not contain anything in it e.g. an intensional absence of the object value
        - Prefer to make surte that the objetc is  proactive for getting  killed by the browser 
    - Undefined, undefined
        - Represents value given to all uninitialized valiable
    - Any, any
        -  The Late Binding (JS Compatibility)    
    - Never, never
        - The Value that will never occur
        - e.g.
            - A logic that may result into throwing an exception, but this logic may be processing Numeric values, arrays, HTTP calls, so they may throw exceptions based on Numeric processing, array processing, HTP Calls, but definitely will not thriw any other exception, hereb we can create a seperate execption handler and we can configure it for what it will retuen and what will 'never' return 
    - never vs void
        - void can be null but never cannot be null        
- Fundamentals
    - The 'let' keyword, used to define 'block' level scope for the declaration
        - Unlike 'var' in JavaScript, the var declaration is always 'function-scope' or 'module-scope'
    - Callback Function, syntax enhancements using 'Arrow-Operator' the '=>'
        - If a function accepts callback function as input parameter, then invoke the method by passing arraow operator as callback
    - String Interpolation aka Template String
        - a Multi-line HTML parsed string, recommended instead of string Concatenation
        - syntax
            - `${EXPRESSION}`       
- Data Structures
    - Array
        - Iterators, the ES 6 optimized loop to read data from collections
            - Symbol.itartor()
                - for..of loop
        - Methods
            - BAsic methods
                - push(), pop(),indexOf(), lastIndexOf(), etc.
            - ES 6 methods
                - forEach(), filter(), map(), reduce()            
    - String
    - Tuples
- Object Oriented Programming
    - TypeScript Modularity
- Asynchronous Programming
    - Promise
    - async/await
- Using TypeScript for App Development
    - HTML Integration
    - Module Bundlers
    - Using it with React.js
    - Unit Testing                   
