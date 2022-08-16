const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.currentTarget.email;
    const password = event.currentTarget.password;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const dataObj = {
        Email: email.value,
        Password: password.value
    };
    console.log(dataObj);
    event.currentTarget.reset();
});
