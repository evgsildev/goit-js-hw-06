let counterValue = 0;

const value = document.querySelector("#value");
const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);



const decrementFunction = () => {
    counterValue-=1;

    value.textContent = counterValue;
};

const incrementFunction = () => {
    counterValue+=1;

    value.textContent = counterValue;
};


decrement.addEventListener("click", decrementFunction);
increment.addEventListener("click", incrementFunction);






