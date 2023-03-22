async function getPostsFromTypicode() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  console.log("users :>>", users);
  users.map((user)=>{
document.getElementById("reviewers").innerHTML +=`
<div id="user">
<div id="user_top">
<div id="user_avata"></div>
<div id="user_names">
<h4>${user.name}</h4>
<p>${user.usernames}</p>
</div>
</div>
<div id="user_bottom">
<p>company:${user.company.name}</p>
<p>city:${user.address.city}</p>
<p>Email:${user.email}</p>
<a href="${user.website}">$user.website}</a>
</div>
</div>
`
  })
  //filter method to filter users whit the name include "p"
  let usersNameP = users.filter((users) => {
    return users.name.includes("P");
  });
}

async function initApp () {
  await getProductsFromServer()
}


document.getElementById("reviewers").innerHTML +=`this is the reviewers section`