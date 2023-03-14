// ### Exercise #1

// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee.
// Can you help her calculate her costs?

// Return the value of what she should be paying.

// const transation = (cost1, cost2, cost3)
// const fee = 3
// const interestFee = 0.01



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
