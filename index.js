// fetch data from a server
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
