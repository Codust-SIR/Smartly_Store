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

getUsers();
// Array.prototype.map()
