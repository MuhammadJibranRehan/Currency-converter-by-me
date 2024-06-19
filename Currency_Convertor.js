// import inquirer from "inquirer"; // for importing inquirer
// import chalk from "chalk";
// console.log(chalk.bgBlue("Currency Convertor"));
// //          CURRENCY CONVERTOR
// const currencies:any = ({
//   USD: 1, //This is base currency and you can also add more currencies 
//   PKR: 277.54,
//   INR: 83.30,
//   EUR: 0.92,
//   NZD: 1.66,
//   NPR: 133.08,
// });
// let userSelection = await inquirer.prompt(
//   [
//     {
//       name:"From",
//       message:"SELECT YOUR CURRENCY TO WHICH YOU WANT TO CONVERT",
//       type:"list",
//       choices:["USD", "PKR", "INR", "EUR", "NZD", "NPR"],
//     },
//     {
//       name:"To",
//       message:"SELECT YOUR CURRENCY IN WHICH YOU WANT TO CONVERT",
//       type:"list",
//       choices:["USD", "PKR", "INR", "EUR", "NZD", "NPR"],
//     },
//     {
//       name:"Amount",
//       message:"ENTER YOUR AMOUNT",
//       type:"number"
//     }
//   ]
// );
// //    The way for calling User Selections
// let fromlist = currencies[userSelection.From];
// let Tolist = currencies[userSelection.To];
// let amount = userSelection[userSelection.Amount];
// //    Now Time For Main Calculation
// //               amount = amount is dividing with its exchange rate = fromlist
// let baseAmount = amount / fromlist
// // For example  5000   /  277.54
// let convertedAmount = baseAmount * Tolist;
// console.log(convertedAmount);
import inquirer from "inquirer";
const currency = ({
    USD: 1, //Base currency
    EUR: 0.91,
    DIN: 904,
    AED: 75,
    INR: 74.57,
    PKR: 280,
});
let user_Ans = await inquirer.prompt([
    {
        name: 'from',
        message: 'Select Your Currency which you want to Convert',
        type: 'list',
        choices: ['USD', 'EUR', 'DIN', 'AED', 'INR', 'PKR'],
    },
    {
        name: 'to',
        message: 'Select Your Currency in  which you want to Convert',
        type: 'list',
        choices: ['USD', 'EUR', 'DIN', 'AED', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: 'How much  Amount You Want to Convert',
        type: 'number',
    }
]);
let fromAmount = currency[user_Ans.from];
let toAmount = currency[user_Ans.to];
let amount = user_Ans.amount;
let baseAmount = amount / fromAmount; //usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
let result = Math.round(convertedAmount);
