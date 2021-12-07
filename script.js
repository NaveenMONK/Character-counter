const input = document.querySelector(".text");
const result = document.querySelector(".result");

input.addEventListener('keyup',() => {
  result.innerHTML = `${input.value.length} Characters`;
})

