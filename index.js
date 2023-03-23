async function getUsers() {
  //fetching users from the jsonplaceholder API
  const response = await fetch ("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  //looping through thr users array
  users.map((user) => {
    console.log(user.name);
  });
}

getUsers();
//Array.prototype.map()

async function initApp () {
  await getPostsFromTypicode()
}

initApp()