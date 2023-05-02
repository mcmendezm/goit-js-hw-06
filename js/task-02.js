const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let liElements = '';

for (let i = 0; i < ingredients.length; i++) {
  liElements += `<li class="item">${ingredients[i]}</li>`;
}
const ulElement = document.querySelector('ul#ingredients');
ulElement.innerHTML = liElements;