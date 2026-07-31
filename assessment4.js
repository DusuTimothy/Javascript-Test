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
