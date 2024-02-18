let first_text = document.querySelector(".first_text");
first_text.addEventListener("click", showFirst);

function showFirst() {
  first_text.classList.toggle("length1");
}

let second_text = document.querySelector(".second_text");
second_text.addEventListener("click", showSecond);

function showSecond() {
  second_text.classList.toggle("length2");
}

let third_text = document.querySelector(".third_text");
third_text.addEventListener("click", showThird);

function showThird() {
  third_text.classList.toggle("length3");
}

let fourth_text = document.querySelector(".fourth_text");
fourth_text.addEventListener("click", showfourth);

function showfourth() {
  fourth_text.classList.toggle("length4");
}

let fifth_text = document.querySelector(".fifth_text");
fifth_text.addEventListener("click", showFifth);

function showFifth() {
  fifth_text.classList.toggle("length5");
}

let sixth_text = document.querySelector(".sixth_text");
sixth_text.addEventListener("click", showSixth);

function showSixth() {
  sixth_text.classList.toggle("length6");
}
