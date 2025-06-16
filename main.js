//const addUserText = document.getElementById("add-user");
//addUserText.innerText = "Adicionar Usuário";
//const button = document.querySelectorAll(".btn");
//items.remove();
//items.firstElementChild.remove();
//items.lastElementChild.remove();
//items.children[1].textContent = "Item Um";
//items.lastElementChild.innerHTML = "<h1>Item Três</h1>";

const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const myForm = document.querySelector("#my-form");
const items = document.querySelector(".items");
const body = document.querySelector("body");
const errorMessage = document.querySelector(".msg");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Please fill out all fields";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return;
  }
  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br /> Email: ${emailValue}`;
  items.appendChild(li);
  nameInput.value = "";
  emailInput.value = "";
});
