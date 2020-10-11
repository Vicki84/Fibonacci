let resultat = create("p")
resultat.innerHTML = 0;

let input = create("input")
input.value = 0;

let plus = create("button");
plus.innerHTML = "+";
plus.onclick = udregnPlus;

let minus = create("button");
minus.innerHTML = "-";
minus.onclick = udregnMinus;

function udregnPlus() {
  resultat.innerHTML = parseFloat(resultat.innerHTML) + parseFloat(input.value);
  input.value = 0;
}

function udregnMinus() {
  resultat.innerHTML = parseFloat(resultat.innerHTML) - parseFloat(input.value);
  input.value = 0;
}

function udregnGange() {
  resultat.innerHTML = parseFloat(resultat.innerHTML) * parseFloat(input.value);
  input.value = 0;
}

function create(type) {
  return document.body.appendChild(document.createElement(type));
}
