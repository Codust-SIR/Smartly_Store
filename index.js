// fetch data from a server

async function getProducts() {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();
  return data;
}

async function init() {
  const products = await getProducts();
  console.log(products);
}

init();
