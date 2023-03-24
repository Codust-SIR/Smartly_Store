// fetch data from a server
function getProducts() {
  return fetch("http://localhost:3001/products").then((res) => {
    res.body;
    console.log("products", res);
  });
}
 

// Hello this is a js file


getProducts();
