// Find the sum of price of products using only reduce reduce(callback))

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const sumOfPrice=products.reduce((acc,curr)=>{

   return acc+curr.price
},0)
  console.log(sumOfPrice)