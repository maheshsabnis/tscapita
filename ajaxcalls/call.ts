class Category {
    constructor(
        public CategoryId:number,
        public CategoryName:string,
        public BasePrice:number
    ){}
}
class DataAccess {
    getCategorires():Array<Category>{
        console.log('Beginning of the method');
        let categories:Array<Category> = new Array<Category>();
        let http = new XMLHttpRequest();
        // 1. Subscribe for Success as well as Errors
        http.onload = ()=>{
           
            // Received the Response
            categories = http.response;
            console.log(`Success = ${JSON.stringify(categories)}`);
        };
        http.onerror = ()=>{
            console.log('Fail');
            categories = new Array<Category>();
        };
        // 2. Initiate Outgoig Call
        http.open("GET","https://catprdapi.azurewebsites.net/api/Category",false);
        // 3. Send the Calls
        http.send();
        console.log('End of the method');
       return categories;
    }
}

class DataAccessPromise {
    /* The method returns the Promise object*/
    getCategorires():Promise<Array<Category>>{
        return new Promise<Array<Category>>((resolve,reject)=>{
            console.log('Beginning of the method');
            let categories:Array<Category> = new Array<Category>();
            let http = new XMLHttpRequest();
            // 1. Subscribe for Success as well as Errors
            http.onload = ()=>{
                console.log(`In Resolve ${http.response}`);
                // Resolve
                resolve(http.response);
            };
            http.onerror = ()=>{
               reject(`Failed`);
            };
            // 2. Initiate Outgoig Call
            http.open("GET","https://catprdapi.azurewebsites.net/api/Category");
            // 3. Send the Calls
            http.send();
            console.log('End of the method');
        });   
    }


     /* The method returns the Promise object*/
     async getCategoriresAsync():Promise<Response>{
        let response = await fetch("https://catprdapi.azurewebsites.net/api/Category");
       
        const data = await response.json();
        console.log(`In Method ${JSON.stringify(data)}`);
        return data;       
    }

    async postCategoryAsync(cat:Category):Promise<Response>{
        let response = await fetch("https://catprdapi.azurewebsites.net/api/Category",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cat)
        });
       
        const data = await response.json();
        console.log(`Posted data ${JSON.stringify(data)}`);
        return data;       
    }

    async putCategoryAsync(id:number,cat:Category):Promise<Response>{
        let response = await fetch(`https://catprdapi.azurewebsites.net/api/Category/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cat)
        });
       
        const data = await response.json();
        console.log(`Posted data ${JSON.stringify(data)}`);
        return data;       
    }

    async deleteCategoryAsync(id:number):Promise<Response>{
        let response = await fetch(`https://catprdapi.azurewebsites.net/api/Category/${id}`,{
            method: "DELETE"
        });
        const data = await response.json();
        return data;       
    }


}


var ds = new DataAccessPromise();
 
// Lets Subscribe to the promise
ds.getCategoriresAsync()
.then((response)=>{
    console.log(`Success on server ${JSON.stringify(response)}`);
})
.catch((error)=>{
    console.log(`Failed ${error}`);
});