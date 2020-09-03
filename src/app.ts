// const pizzas = [
//     { name: 'Pepperoni', toppings: ['pepperoni']}
// ];

// const mapperdPizzas1 = pizzas.map(function(pizza){ 
//     return pizza.name.toLocaleUpperCase();
// });

// const mapperdPizzas2 = pizzas.map(pizza => { 
//     return pizza.name.toLocaleUpperCase();
// });

// const mapperdPizzas3 = pizzas.map(pizza =>  pizza.name.toLocaleUpperCase());

// console.log(mapperdPizzas1);
// console.log(mapperdPizzas2);
// console.log(mapperdPizzas3);

// const pizza = {
//     name: 'Margherita',
//     getname: function() {
//         return this;
//     }
// }

// const pizza2 = {
//     name: 'Cheese',
//     getname: () => {
//         return this;
//     }
// }
// console.log(pizza.getname());
// console.log(pizza2.getname());


// function add(a, b =25){
//     return a + b;
// }

// console.log(add(2));

// const pizza = {
//     name: 'pepperoni',
//     price: 15

// }

// const toppings = ['Cheese'];

// const order = {pizza, toppings}

// console.log(order);


//spread operator
const oneToFive = [1 ,2 ,3 ,4 ,5];
const sixToTen = [6, 7, 8, 9, 10];

console.log([...oneToFive, ...sixToTen]);

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]