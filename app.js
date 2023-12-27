/* TOPICS That we will cover in this
1 var let const difference
*/

// 1 var let const difference

/* ********************************************************************** Urdu ******************************************************************************** */

// a) var: (ECMAScript 2015) mein var keyword se declare kiye gaye variables ka scope function-level hota tha. Agar aapne var keyword se kisi variable ko function ke andar declare kiya, toh wo variable sirf usi function ke andar hi accessible hota tha (local scope). Lekin, agar aapne var keyword se kisi variable ko function ke bahar, for loop mein ya kisi block ke andar declare kiya tha, toh wo variable global scope mein ho jata tha. var ke variables mein hoisting hota tha, jiski wajah se JavaScript engine un variables ko unke scope ke shuruwat mein le jata tha. Iska matlab tha ki aap variable ko uske declaration se pehle bhi use kar sakte the, lekin us variable ki actual value declaration ke baad hi assign hoti thi.

// b) let: let keyword se declare kiye gaye variables ka scope block-level hota hai, matlab ye variables un blocks mein hi access kar sakte hain jinme define kiye gaye hain, jaise ki functions, if statements, ya loops. Hoisting nahi hota, iska matlab let se declare kiye gaye variables ko unke declare hone se pehle access nahi kiya ja sakta. Ye var se alag hai aur code likhne mein clarity aur predictability provide karta hai.

// c) const: const variables hote hain jinke once assigned value ko baad mein change nahi kiya ja sakta hai. Yeh immutable variables hote hain, yaani inki values constant rehti hain throughout their scope. Aur haan, const variables per bhi hoisting nahi hota. Hoisting ki concept JavaScript mein variables ke declarations ko unke scope ke shuruwat mein le jaane ki hai, lekin const ke case mein hoisting harkat sirf declaration ko lekar hoti hai, lekin value assign nahi hoti jab tak aap explicitly assign nahi karte.

/* ********************************************************************** English ******************************************************************************** */

// a) var: In ECMAScript 2015, variables declared with the var keyword had a function-level scope. If you declared a variable inside a function using var, it was only accessible within that function (local scope). However, if you declared a variable outside a function, inside a for loop, or within any block using var, it became part of the global scope. Variables declared with var underwent hoisting, meaning JavaScript would bring these variables to the beginning of their scope. This meant you could use a variable before its actual declaration, but its value was assigned only after the variable's declaration.

// b) let: The let keyword declares variables with block-level scope in ECMAScript, allowing these variables to be accessible only within the blocks where they are defined, such as functions, if statements, or loops. Unlike var, let does not undergo hoisting, meaning variables declared with let cannot be accessed before their declaration. This distinction brings clarity and predictability to code writing, ensuring that variable usage aligns with their scope and prevents accessing variables before they're defined.

// c) const: const is for things you can't change. Once you decide what it is, it stays that way. It's like a box where you put something and seal it — you can't change what's inside. Also, when you use const, JavaScript won’t shuffle things around before you’re ready. It's like giving a name to something and saying, "This is what it is, and it won't change later."



/* ********************************************************************** Examples ******************************************************************************** */

// Example of a 
function sampleFunction() {
    console.log(myVar); // Output: undefined
    var myVar = 10;
    console.log(myVar); // Output: 10
}
sampleFunction();
// console.log(myVar); // Output: Error: myVar is not defined

// Example of b 
function exampleFunction() {
    let x = 10;
    console.log(x)
    if (true) {
        let x = 20;
        console.log(x); // Output: 10
    }
}
exampleFunction()

// Example of c
const PI = Math.PI;
console.log("PI:", PI)
// PI = 4  Error: Assignment to constant variable

