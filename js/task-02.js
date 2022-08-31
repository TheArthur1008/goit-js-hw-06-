const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const newItemIngredients = ingredients.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.classList = 'item';
//   itemEl.textContent = option;

//   return itemEl;
// });
// console.log(newItemIngredients);

// const listIngredients = document.querySelector('#ingredients');
// console.log(listIngredients);

// listIngredients.append(...newItemIngredients);
const listIngredientsEl = document.querySelector('#ingredients');


const createItemIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList = 'item';
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const elements = createItemIngredientsEl(ingredients);
listIngredientsEl.append(...elements);
