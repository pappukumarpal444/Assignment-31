// Finding object on product
const products = [
    { name:'Laptop', price:500, color:'gray'},
    { name:'phone', price:50, color:'black'},
    { name:'phone', price:10, color:'yellow'}
 ]

    const findProduct = products.find(product => product.name == 'phone');
    console.log(findProduct);