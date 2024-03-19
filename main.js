let box = document.querySelector(".box");
let amount = 638;

for (let i = 0; i < amount; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  box.append(item);
}

let boxs = document.querySelectorAll(".item");

boxs.forEach((element) => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  element.addEventListener("mouseover", () => {
    element.style.background = `rgb(${r}, ${g}, ${b})`;
  });
  element.addEventListener('mouseleave',()=>removeColor(element))
});


function removeColor(el){
    el.style.background=''
}