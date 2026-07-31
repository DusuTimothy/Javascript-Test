//Question 1.
const users = [
  { name: "Timothy", age: 31 },
  { name: "Janet", age: 17 },
  { name: "Luke", age: 70 },

];

let found = users.map((index) => {
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
  user.push(account)
}
bankAccount("Timothy", 1234);

function deposit(accNam, amount) {
  user.map((index) => {
    if (index.accNam === accNam) {
      index.accBalance += amount;
    }
    else {
      console.log("Invalid account Name");

    }
  })
};
deposit("Timothy", 5000);

function withDraw(accNam, amount) {
  user.map((index) => {
    if (index.accNam === accNam && index.accBalance >= amount) {
      index.accBalance += amount;
    }
    else {
      console.log("Invalid account Name");

    }
  })
};
withDraw("Timothy", 5000);





