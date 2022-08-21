const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul");

function createItem (item) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = item;

  console.log(item);
  return listItem;
}

const listItems = ingredients.map(createItem);

ul.append(...listItems);
