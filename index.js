/* fetch data from a server
function getProducts() {
  return fetch("http://localhost:3001/products").then((res) =>
    res.json().then((data) => data)
  );
}
async function init() {
  const products = await getProducts();
  console.log(products);
}

init();
*/


async function getusers(){
  // Fetching users from the json placeholder API
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // Looping through the users array
  users.map((user) =>{
    console.log(user.name)
  })
}
getusers();