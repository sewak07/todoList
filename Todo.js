let container = document.querySelector(".container");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let ul=document.createElement("ul");
container.appendChild(ul);

// Add event listener to the button
btn.addEventListener("click", () => {
    if (input.value.trim() === "") return; // Prevent empty inputs

   // Create a new input element
   let newInput = document.createElement("li");
   newInput.innerText= input.value;

   //create a button 
   let newBtn=document.createElement("button");
   newBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; 
   
   ul.appendChild(newInput);
   newInput.appendChild(newBtn);

   // Clear the value of the input field
   input.value = "";
  
   
   
   newBtn.addEventListener("click",()=>{
      ul.removeChild(newInput);
   });
});




