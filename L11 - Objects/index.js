// Adding a new property
const person = { name: "Alice", age: 25 };
person.city = "New York";
console.log(person);

// Practice: Add a "country" property to the person object and print it.
person.country = 'india';
// Modifying an existing property
person.age = 26;
console.log(person);

// Practice: Change the "name" property to "Bob" and print the object.

// Object with method
const car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started!");
  }
};
car.start();

// Practice: Add a "stop" method to the car object that prints "Car stopped!" and call it.
const bus ={
  name:'bmw',
  stop: function(){
    console.log('bmw stop');
  }
};
// Destructuring assignment
const { brand } = car;
console.log(brand);

// Practice: Use destructuring to get the "name" and "age" from the person object and print them.

// Nested Complex Objects
const restaurant = {
  name: "Food Place",
  owner: { name: "Chef John", age: 40 },
  menu: [
    { item: "Pizza", price: 12 },
    { item: "Burger", price: 8 }
  ]
};

// Accessing properties of the nested objects
console.log(restaurant.owner.name);
console.log(restaurant.menu[0].item);

// Practice: Print the price of the second menu item.
restaurant.menu.foreach ((items) => items.items);
// Destructure owner object
const { owner } = restaurant;
console.log(owner);

// Practice: Use destructuring to get the owner's name and age, then print them.

// Output details about the restaurant
console.log(`${restaurant.name} is owned by ${restaurant.owner.name}.`);

// Practice: Print a sentence with the restaurant's name and the first menu item's name.

// Output the menu items using destructuring within forEach
restaurant.menu.forEach(({ item, price }) => {
  console.log(`${item}: $${price}`);
});

// Practice: Use forEach and destructuring to print only the names of the menu items.