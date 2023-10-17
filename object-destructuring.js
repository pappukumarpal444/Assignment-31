const food ={
    id:101,
    name:'Apple',
    color:'Light red',
    address:'Kashmir',
    price:200
}

// Destructing old way
const foodId = food.id
const foodName = food.name
const foodPrice = food.price
console.log(foodId, foodName, foodPrice)


// Destructuring ES6 way
const {id, name, price} = food
console.log(id, name, price)