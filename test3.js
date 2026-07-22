const controller = new AbortController();
const {signal} = controller;

async function fetchData() {
 try{
  const data = await fetch('https://jsonplaceholder.typicode.com')
  const jsonData = await Response.json
  console.log(jsonData);
 }  
 catch (error){
 if (error.name === "AbortError")
  console.log("");
  

 }
}
fetchData()
Controller.abort()