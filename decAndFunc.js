// ### Exercise #1

// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee.
// Can you help her calculate her costs?

// Return the value of what she should be paying.


// let totalT = 1000, 15000
const transactions = [100, 200, 300, 400, 500];

// Calculate the total transaction amount
const transactionTotal = transactions.reduce((acc, val) => acc + val);

// Calculate the total fee amount
const feeTotal = transactions.length * 3;

// Calculate the total interest amount
const interestTotal = transactionTotal * 0.01;

// Calculate the total cost
const totalCost = feeTotal + interestTotal;

// Calculate the total payment amount
const paymentAmount = transactionTotal + totalCost;

console.log("Maria's total payment amount for the month is $" + paymentAmount.toFixed(2));


// ### Exercise #2

// #### Part 1
// Ed would like a way to input 3 names of his friends.
// The output should be a console greeting to his friends saying: 
// `Welcome {name1}, {name2}, {name3}.`

console.log(`Welcome 'ben', 'ban', 'benny'`);



// #### Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30


// console.log(birthday);

// #### Part 3
// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

let friendName1;
let friendName2;
let friendName3;
let friendYear1;
let friendYear2;
let friendYear3;
// function welcome + friend name
function hiFriend (friendName1,friendName2,friendName3,) {
    console.log('Welcome ' + friendName1+', '+friendName2+', '+friendName3+'.');
}
hiFriend('Pop','Mark','Joe');
​
// cal friend age
function ageFriend (friendYear1,friendYear2,friendYear3) {
    console.log(2023 - friendYear1);
    console.log(2023 - friendYear2);
    console.log(2023 - friendYear3);
}
ageFriend(1999,1998,1997);

// combine name & age 
function welcomeFriend (friendName1,friendName2,friendName3,friendYear1,friendYear2,friendYear3) {
    console.log(`Welcome ${friendName1}, you are ${friendYear1}. Welcome ${friendName2}, you are ${friendYear2}. Welcome ${friendName3}, you are ${friendYear3}.`);
}
welcomeFriend('Pop','Mark','Joe',1999,1998,1997);