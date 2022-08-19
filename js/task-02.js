const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



function createList (arr) {
  const ul = document.getElementById("ingredients");
  
  const listItem = arr.map(item => `<li class="list-item">${item}</li>`)
  .join("");
  ul.innerHTML = listItem;
}
createList(ingredients);