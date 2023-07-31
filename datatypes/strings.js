var str;
str = 'TypeScript is the best language for improvising the JavaSCript Productivity. This is default language used for Angular App development. This is also used in React';
console.log("length of ".concat(str, " is = ").concat(str.length));
console.log("Uppdate Case of ".concat(str, " is = ").concat(str.toUpperCase()));
console.log("FIrst index of blank space is = ".concat(str.indexOf(' ')));
console.log("Character ar index 9 =s ".concat(str.charAt(9)));
// ES 6 Search
var strToSearch = 'best';
if (str.search(strToSearch) === -1) {
    console.log('This is not found');
}
else {
    console.log('FOund');
}
var strWithSplitbyBlankSpaces = str.split(" ");
console.log(strWithSplitbyBlankSpaces);
