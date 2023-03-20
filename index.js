async function getProductsFromServer () {
  const response = await fetch('http://localhost:3001/products')
  console.log("response", response)
}

async function initApp () {
  await getProductsFromServer()
}

initApp()