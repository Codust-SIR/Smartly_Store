async function getUsers() {
  //fetching users from the jsonplaceholder API
  const response = await fetch ("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  //looping through thr users array
  users.map((user) => {
    console.log(user.name);
  });
/* fetch data from a server
function getProducts() {
  return fetch("http://localhost:3001/products").then((res) =>
    res.json().then((data) => data)
  );
}

getUsers();
//Array.prototype.map()
