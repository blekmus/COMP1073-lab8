const burgerIngredients = {
  buns: ["brioche", "pretzel", "whole wheat"],
  veggies: ["arugula", "caramelized onions", "roasted peppers"],
  cheeses: ["blue cheese", "smoked gouda", "brie"],
  sauces: ["truffle aioli", "chipotle mayo", "garlic herb"],
  patties: ["wagyu beef", "portobello mushroom", "spicy chicken"],
  toppings: ["crispy bacon", "fried egg", "avocado"]
};

// Get the elements
const burgerDescription = document.getElementById('burgerDescription');
const orderButton = document.getElementById('orderButton');

// Define the Burger constructor
function Burger(bun, veggie, cheese, sauce, patty, topping) {
  this.bun = bun;
  this.veggie = veggie;
  this.cheese = cheese;
  this.sauce = sauce;
  this.patty = patty;
  this.topping = topping;

  this.describe = function () {
    return `A <span class="topping1">${this.bun}</span> bun with <span class="topping2">${this.patty}</span>, topped with <span class="topping3">${this.cheese}</span>, <span class="topping4">${this.veggie}</span>, <span class="topping5">${this.topping}</span>, and a dollop of <span class="topping6">${this.sauce}</span>.`;
  }
}

// Define helper functions
function getRandomIngredient(category) {
  const ingredients = burgerIngredients[category];
  return ingredients[Math.floor(Math.random() * ingredients.length)];
}

// Define event listener
function createRandomBurger() {
  return new Burger(
    getRandomIngredient('buns'),
    getRandomIngredient('veggies'),
    getRandomIngredient('cheeses'),
    getRandomIngredient('sauces'),
    getRandomIngredient('patties'),
    getRandomIngredient('toppings')
  );
}

// Define event listener
function updateBurgerDescription() {
  const burger = createRandomBurger();
  burgerDescription.innerHTML = burger.describe();
}

// Add event listener
orderButton.addEventListener('click', updateBurgerDescription);

// Initialize with a default message
burgerDescription.textContent = "Your gourmet burger description will appear here.";