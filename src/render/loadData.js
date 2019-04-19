//Used to Get Some Data from the Server 
/* Classic HTTP Callback request */
/*let xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET", "https://reqres.in//api/users?page=2");
xmlHttpRequest.send();
const response = xmlHttpRequest.responseText;

const axios = require("axios").default;
axios.get("https://reqres.in//api/users?page=2").then((response) => {
  console.log("Response: ", response);
}).catch((err) => {
  console.error("Error fetching", err);
})

//ES6 Async/Await 
async function fetchData() {
  const response =  await axios.get("https://reqres.in//api/users?page=2")
  if(response) {
    console.log("Data Fetched: ", response);
  }
}

fetchData();*/