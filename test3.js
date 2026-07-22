const controller = new AbortController();
const { signal } = controller;

async function fetchData() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com')
    const jsonData = await Response.json
    console.log(jsonData);
  }
  catch (error) {
    if (error.name === "AbortError") {
      console.log("Successful");


    }
   else {
    console.log("unsuccessful");

  }
}
}
fetchData()
controller.abort()