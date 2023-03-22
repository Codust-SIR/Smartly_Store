async function getPostsFromTypicode() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  console.log("users :>>", users);
  //filter method to filter users whit the name include "p"
  let usersNameP = users.filter((users) => {
    return users.name.includes("P");
  });
}

async function initApp () {
  await getProductsFromServer()
}
