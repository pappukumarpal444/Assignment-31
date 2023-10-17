// Filtering object on product
const products = [
    { name:'Laptop', price:500, color:'gray'},
    { name:'Phone', price:50, color:'black'},
    { name:'tshirt', price:10, color:'yellow'}
 ]

    const smallPrice = products.filter(product => product.price < 20);
    console.log(smallPrice);



// Filtering big array gater than 30 using ES6
const bignumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const bigNumber = bignumbers.filter(number => number > 30);
console.log(bigNumber)

// Filtering small array less than 30 using ES6
const smallnumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const smallNumber = smallnumbers.filter(number => number < 30);
console.log(smallNumber)