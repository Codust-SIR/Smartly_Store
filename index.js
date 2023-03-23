async function getUsers() {
  //  Fetching users from the jsonplaceholder API
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // Looping through the users array
  users.map((user) => {
    document.getElementById("reviewers").innerHTML += `
      <p>${user.email}</p>
    `;
  });
}
/* fetch data from a server
function getProducts() {
  return fetch("http://localhost:3001/products").then((res) =>
    res.json().then((data) => data)
  );
}

getUsers();
// Array.prototype.map()

init();
