import { One } from "./one";
export default class Utilities {
    changeCase(str:string, c:string):string{
        One();
        if( c === 'L' || c === 'l')
            return str.toLowerCase();
        if(c === 'u' || c === 'U')
            return str.toUpperCase();
        
        return c;    
    }

    reverseString(str:string):string {
        One();
        let reverse:string ='';
        for(let i=str.length -1 ; i>=0;i--){
            reverse += str[i];
        } 
        return reverse;
    }
}