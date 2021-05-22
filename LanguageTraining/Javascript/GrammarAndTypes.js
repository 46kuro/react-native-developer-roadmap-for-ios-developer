// --- Comment ---

// This is a comment

/* This is
also 
comment
*/

// --- Declarations ---

// var(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

// var varVariableA;
// console.log(varVariableA);
// console.log(varVariableB);
// var varVariableB; // var hoisting

// let(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

// function letTest() {
//   let x = 1;
//   {
//     let x = 2; // different variable
//     console.log(x); // 2
//   }
//   console.log(x); // 1
// }
// letTest();

// let letVariableA = "before";
// console.log(letVariableA);
// letVariableA = "after";
// console.log(letVariableA);

// const(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

// const constVariable = "before";
// try {
//   constVariable = "after";
// } catch (err) {
//   console.log(err);
// }

// --- Primitives(https://developer.mozilla.org/en-US/docs/Glossary/Primitive) ---

const boolean = true;
console.log(boolean);

const nullValue = null;
console.log(nullValue);

const undefinedValue = undefined;
console.log(undefinedValue);

const numberValue = 1;
console.log(numberValue);

const bigintValue = 100;
console.log(bigintValue);

const stringValue = "string";
console.log(stringValue);

const symbolValue = Symbol("Sym");
console.log(symbolValue);

// --- Object(https://developer.mozilla.org/en-US/docs/Glossary/Object) ---
