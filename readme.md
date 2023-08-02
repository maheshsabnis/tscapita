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
    - SPread Operators, used to buold the Mutatble object in the ES 6+
    - Function Types With JavaScript (As it is used by TypeScript)
        - Object-Orieinted JS Definitions
````javascript
    // 1. reference functions
    var obj = function(){
        this.f1 = function(){...}; // public
        this.f2 = function(){...}; // public
        // private
        function f3(){

        }
    }

    var o1 = new obj();
    o1.f1(); o1.f2();
    o1.f3(); // Error 

    // 2. Close Function, the return a singleton object
    function MyObject(){
        // Private definitions
        function f3(){
            ...
        }
        return {
            // Public Object Literal
            f1:function(){...},
            f2:function(){...},
            
        }
    }

     var o1 = new MyObject();
    o1.f1(); o1.f2();
    o1.f3(); // Error 
````

    - String
    - Tuples
- Object Oriented Programming
    - All Modern Popular JS Libs and Frwks
    - TypeScript Modularity
    - The 'class' keyword
        - Constructor
            - Either zero argument or parameterized ctor
            - private, public, or protectd membere access specifiers as ctor parameters
        - Methods 
            - methods are public by default
            - the 'function' keyword is not required
            - recommended to define return type either void or the type of data returned by the function
            - No Overloading is supported by default
                - Instead, define method with same name but different in parameters and then write a single implementation for these methods
            - variable number of parameters are possible for function usig spread (...)
        - Properties
            - get and set properties
        - Access Specifiers
            - public (default)
            - private
            - protected
        - Access Modifiers
            - abstract class
                - cannot be instantiated
                - abstract method
                    - No implementation
                - If the abstract class has a parameterized constructor, then the derived class MUST also define a constructor with 'super()' call in it which will access the base class constructor.     
            - the 'extends' keyword is used for derivation
                - same as server-side  derivations            
            - static    
                - Access memebers directly using name of the class
    - The 'interface' definitions
        - The 'implemets' keyword 
    - Generics
        - Allows to create a template for Implementation for valid TypeScript Types (those are supported only in TypeScript)   
    - Modularity
        - An approach to create separet objects scross separate files and then loading them thorugh the Bundler  
            - The Export and Import Objects
                - These objects are used to 'export' 'the type' from one file and these types can be used in other file  using 'import'    
                - This uses 'moduleResolution' as 'nodejs' on server-side
                    - This uses the Node.js file module to look, load, and cache file so that it can be used on server
                    - This is a module standard in all JS Libraries and Frameworks
                - Where as the 'MODULE-BUNDLER' MUST be used to load 'a megred transpiled file' on Client Side in Browser    
                    - The 'webpack' a module bundler tool
                        - Uses Various Modulde Loaders for
                            - Loading Files e.g. js, ts, jsx, tsx, css, scss, sass, img, etc. using their loader-engines
                        - Validate all files
                        - Transpile these files
                        - Merge these files
                        - bundle it    
                    - Packages used for Module Loader and Bundling
                        - webpack, webpack-cli, webpack-dev-server
                        - ts-loader
                        - html-webpack-plugin 
                        - css-loader
                    - npm install --save-dev  webpack webpack-cli webpack-dev-server ts-loader  html-webpack-plugin    
- Asynchronous Programming
    - XmlHttpRequest Object
        - Written for Async Communication to Server to fetch data / Write Data based on 'Event-Subscription' model
        - Event-Subscription
            - The caller MUST first subscribe to the expected result before initiating the call
    - $.ajax() 
        - jQuery 3.x+
            - the 'xhr' object
                - callback methods         
    - Promise
        - The ES 6 Ready-to-Use Class that Encapsulats all Async Opertaions
            - Provides Facility for following
                - A Simple Subscription Model
                - Built-In Error Handling
                - Chain of Async Calls (Define Use-Case) 
                - Parallel Async Calls (Define USe-Case)
        - Promise Baserd Object Models
            - $.ajax()
                - Enhanced for Xhr Object, that uses Promise Object        
            - $.http()
                - By Angular.js, purely re-written for Promise
            - fetch()
                - A Pure Promise object by ES 6 
        - Promise<T> class
            - T represents the type of Response that will be returned after the successful execution aka Resolve
            - Constructor
                - Promise<T>(Resolve,Reject);
                    - Resolve: The Success Callback
                    - Reject: The Faild Callback
            - Methods
                - then()
                    - Return an another promise object, that helps for Chain of Async Operations
                - catch()
                    - Used to handle the Failure / Rejection
                - all([P1,P2,....P10])
                    - Used for Parallel Async Calls   
                    - Accepts an array of Promise Objects
                    - At-Max 10 Calls  
                        - P1,P2,...P10 are individual calls those are Promise objects   
        - axios
            - A Powerfull Promise based Library for handling Async Calls
            - Extensiveluy used in React Apps as well as Node.js apps                                   
            - npm isntall axios
    - async/await
        - async: A Method Modifier that represnts that the methos performig an async operations and returns a Promise object
        - await: A Statement Modifier that represent the acrual asynchronous operation
            - Await always peforms an auto-subscription to Promise and received the resolved response 
- Using TypeScript for App Development
    - HTML Integration
    - Module Bundlers
    - Using it with React.js
    - Unit Testing                   

# React.js

- npx create-react-app my-app --template typescript

- React Component with Type Definitions
- Object Model
    - The 'react', the base package, this has 'Component' class and all hooks
    - The 'react-dom', that packae that is used to mount component on UI in browser
    - The 'TSX' (JSX), the typescript extension compiler to compile React apps developed using TypeScript
        - COmpile HTML elements with its attributes
    - Component
        - Function that returns HTML DOM
        - Define a 'state', a property based on which the DOM will change
        - Behaviors, method(s) those will be bound to the HTML DOM Elements so that tey can be invoked when an event is raised
    - Component is Reusable base don following guidelines
        - Plan for UI
        - IMP: Decide the local data as well as data received from the parent to the component      
        - Decide bahavior of the component
            - The local methods those will process the local data (state) that will modify the DOM
            - Methods, those will be emitted from the component to its parent
    - Statefull components
        - Component that accepts data from its parent
            - Implemented using the 'props', an 'immutable' object, that will be keep changing with new properties and data in it
               - In TypeScript, the props is implemented using 'interface' type, this interface defines properties those are shared across components   
               - The props will be live till the react app is running in the browser    
            - The local state object
                - a 'mutable' object, the object that will be changed based on events on DOM elements
                - the local state is bound with DOM elements
                - The state for mounted component on DOM will be killed when the component is unmounted from DOM
````javascript
    function MyComponent(){
        return (<HTML/>)
    }
    /*OR*/

    const MyComponent=()=>{
         return (<HTML/>)
    }

    /* OR */

    const MyComponent=()=({
        <HTML/>
    })

````
    - Hooks
        - Functions those are used for following
            - state definition
                - useState()
````javascript
    const [x, setX] = useState(0);
    // x is state property
    // 0 is  initial value of x
    // setX, an Action that will be dispatched (SetDispatchAction), that will be responsible to update thate state

````
            - data sharing across components
                - useContext()
            - resource intensive operations e.g. HTTP Calls
                - useEffect()
            - state transition, effective when the state updates takes palce based on external logic
                - useReducer()
            - DOM Access based on reference of DOM 
                - useRef()
            - Invoking a method from the Child Component
                - useCallback()
            - Cahcing the large calculated value in memory
                - useMemo()
        - Hooks are always accessible at component level
            - We cannot access a standard hook inside any other method in component
            - We can create custom hook (a function), and in the custom hook we can access standard hook        