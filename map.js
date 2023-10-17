const numbers = [45, 78, 96, 46, 100, 2, 47, 41]

// ES6 way
const finalResult = numbers.map(numbers => numbers * 2)
// console.log(finalResult)


// Old way 
const  doubleIt = numbers => numbers * 2;
const output = [ ]
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result)
}
// console.log(output);

// Using by ES6 Mathod
const friends = ['Sonjoy', 'joy', 'Dhananjoy', 'Zoya']
const friendLength = friends.map(friends => friends.length)
// console.log(friendLength)

// map on object using ES6 Method
const products = [
   { name:'Laptop', price:500, color:'gray'},
   { name:'Phone', price:50, color:'black'},
   { name:'tshirt', price:10, color:'yellow'}
]


const productName = products.map(products => products.name)
const productPrice = products.map(products => products.price)
console.log(productName,'\n'+ productPrice)
