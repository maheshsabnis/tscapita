import axios from "axios";

import { Category } from "../models/category";


export class HttpSrevice {
    private url:string = "https://catprdapi.azurewebsites.net/api/Category";

    async getCategories():Promise<Category[]> {
        const response = axios.get(this.url);
        return (await response).data;
    }


    async createCategory(cat:Category):Promise<Category> {
        const response = axios.post(this.url, cat, {
            headers :{
                "Content-Type":"application/json"
            }
        });
        return (await response).data;
    }
}