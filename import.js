// JavaScript Modules practice

// name import
import  {fName, myFunc as multipulation, myObj} from "./export.js";

// default import
import lName from "./export.js"


console.log(fName);
console.log(lName);
console.log(multipulation(2, 2));
console.log(myObj.myDetails());