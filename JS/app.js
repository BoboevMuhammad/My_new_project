const mainDiv = document.querySelector("#block__for-button");
const button = document.querySelector(".button__header");

const divForList = document.createElement("div");
const list = document.createElement("ul");

list.classList.add("hide");

list.innerHTML = `
<li><a href="" class="link">File<a></li>
<li><a href="" class="link">News<a></li>
<li><a href="" class="link">About<a></li>
<li><a href="" class="link">Help<a></li>
`;

button.addEventListener("click", showAndHide);

function showAndHide() {
  if (
    button ===
    `<button
            class="navbar-dark bg-secondary navbar-toggler p-3"
            id="header__button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon text-light"></span>
          </button>`
  ) {
    list.classList.toggle("hide");
    list.classList.toggle("show");
  } else {
    list.classList.toggle("show");
    list.classList.toggle("hide");
  }
}

divForList.appendChild(list);
mainDiv.appendChild(button);
mainDiv.appendChild(divForList);
