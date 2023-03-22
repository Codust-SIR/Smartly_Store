async function getPostsFromTypicode() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  // Filter method to filter users with the name include "P"
  let usersNamesP = users.filter((user) => {
    return user.name.toLowerCase().includes("e")
  });
  console.log("Users names with  P", usersNamesP)
}

getPostsFromTypicode();
