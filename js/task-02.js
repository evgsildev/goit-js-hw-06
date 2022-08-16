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
  
  arr.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = item;
    ul.append(li);
  });
}
createList(ingredients);