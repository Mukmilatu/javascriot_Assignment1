//  Question 1: Write a function that take parameter/variables from the global scope 
// The first parameter should represent your name, the second parameter should represent your weight in kg
// Your funtion should convert your weight in kg to pounds 
// finally your function should return a string that tells your name and your weight in pounds
// Note that : 
// you are to use prompt method to get both the name and weight in kg.
// You're to use alert method to display the function's return statement for a user to see on the browser.

let name = prompt("Enter You name please: "); 
let weight = Number(prompt("Enter Your weight in kg: "));

function present(a, b){ 
        let lbs = weight * 2.2046; 
        return `Name is => ${name} \n Weight in Pounds is => ${lbs} \n Good Luck!`
}

alert(present(name,weight));