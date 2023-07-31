let str:string; 

str = 'TypeScript is the best language for improvising the JavaSCript Productivity. This is default language used for Angular App development. This is also used in React';

console.log(`length of ${str} is = ${str.length}`);

console.log(`Uppdate Case of ${str} is = ${str.toUpperCase()}`);

console.log(`FIrst index of blank space is = ${str.indexOf(' ')}`);

console.log(`Character ar index 9 =s ${str.charAt(9)}`);

// ES 6 Search
 let strToSearch = 'best';
 if(str.search(strToSearch) === -1) {
    console.log('This is not found');
 } else {
    console.log('FOund');
 }

 let strWithSplitbyBlankSpaces = str.split(" ");
 console.log(strWithSplitbyBlankSpaces);
