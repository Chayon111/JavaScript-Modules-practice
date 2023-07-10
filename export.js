// JavaScript Modules practice

export const fName = "Chayon";

// default export
const lName = "Mondol";
export default lName;

// function export
export const myFunc = (a, b) => {
    return a * b;
 }
// object export
export const myObj = {
    name : "Chayon Mondol",
    age : 25,
    myDetails() {
        return `I am ${this.name}. And my age is ${this.age}.`;
    }
}

