// const input = document.querySelector("#input")
// const button = document.querySelector("button")


// button.addEventListener("click", onClick)
// function onClick(){
//    input.value = 'abc'
// }

// const input = document.querySelector("#input");
// const button = document.querySelector("button");

// button.addEventListener("click", onClick);
// function onClick(){
//     alert (input.value);
// }

// const btn = document.querySelector(".btn-3");

// const firstInput = document.querySelector("#first-input");
// const secondInput = document.querySelector("#second-input");

// btn.addEventListener("click", () => {
//     const temp = firstInput.value;

//     firstInput.value = secondInput.value;
//     secondInput.value = temp;
// });

// const button = document.querySelector("button");
// const parags = document.querySelector("p");
//  button.addEventListener("click", onClick);
//   function.onClick(){
//     parags.forEach(parags, i)=>{
//         parags.textContent = i + 1;
//     }
//   }

// const inputTest = document.querySelector("#test")
// const inputResult = document.querySelector("#result") 
// const checkResult = document.querySelector("button")

// checkResult.addEventListener('click', square)
// function square(){
//     if(isNaN(inputTest.value)){
//         return alert('Ввели не число')
//     }
//     inputResult.value = inputTest.value**2
// }


// const h1 = document.querySelector("h1")
// const list = document.createElement("ul")
// let ask = prompt("Введіть текст")
// while(ask){
// const li = document.createElement("li")
// li.textContent = ask;
// list.appendChild(li);
// ask = prompt("Введіть текст");
// }
// h1.after(list)



// const links = document.querySelector("a");
// links.forEach((link)=>{
//     links.addEventListener("mouseover", onOver)
// }
// )
// function onOver(event){
//     event.target.title = event.target.textContent
// }


// const spans = document.querySelectorAll("span");

// spans.forEach((span) => {
//     span.addEventListener("click", red);
// });

// function red(event) {
//     const span = event.target;

//     span.style.backgroundColor = "red";

//     span.removeEventListener("click", red);

//     span.addEventListener("click", green);
// }

// function green(event) {
//     const span = event.target;

//     span.style.backgroundColor = "green";

//     span.removeEventListener("click", green);

//     span.addEventListener("click", red);
// }

// const list = document.querySelector("#ul");
// const button = document.querySelector("#btn");
// button.addEventListener("click", addItem)
// list.addEventListener("click", addText)
// function addItem(){
//     list.insertAdjacentHTML("beforeend", "<li>пункт</li>");
// }

// function addText(event){
//     console.log(event.target);
//     if(event.target.nodeName !=== "li")
//     event.target.textContent += "!"
}