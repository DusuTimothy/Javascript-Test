//Question 1.
const users = [
  { name: "Timothy", age: 31 },
  { name: "Janet", age: 17 },
  { name: "Luke", age: 70 },

];

users.map((index) => {
  if (index.age < 18) {
    console.log("You are a minor");
  }
  else if (index.age > 18 && index.age < 70) {
    console.log("You are an adult");

  }
  else {
    console.log("You are a senior");

  }
});


// Question 4

let user = [];

function bankAccount(accName, accNum) {
  let account = {
    accName: accName, 
    accNum: accNum,
    accBalance: 0
  };
  user.push(account);
}
bankAccount("Timothy", 1234);

function deposit(accName, amount) {
  let account = user.find(u => u.accName === accName);
  
  if (account) {
    account.accBalance += amount;
    console.log(`New balance: ${account.accBalance}`);
  } else {
    console.log("Invalid account Name");
  }
}
deposit("Timothy", 5000);

function withDraw(accName, amount) {
  let account = user.find(u => u.accName === accName);
  
  if (account && account.accBalance >= amount) {
    account.accBalance -= amount; 
    console.log(`Remaining balance: ${account.accBalance}`);
  } else if (!account) {
    console.log("Invalid account Name");
  } else {
    console.log("Insufficient funds");
  }
}
withDraw("Timothy", 2000);

function checkBalance(accName) {
  let account = user.find(u => u.accName === accName);
  
  if (account) {
    console.log(`Balance: ${account.accBalance}`);
    return account.accBalance;
  } else {
    console.log("Invalid account Name");
  }
}
checkBalance("Timothy");

console.log(user);







