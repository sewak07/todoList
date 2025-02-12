let container = document.querySelector(".container");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let ul=document.createElement("ul");
container.appendChild(ul);

// Add event listener to the button
btn.addEventListener("click", () => {
   

   // Create a new input element
   let newInput = document.createElement("input");
   newInput.innerText= input.value;

   //create a button 
   let newBtn=document.createElement("button");
   newBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; 
   
   ul.appendChild(newInput);
   container.appendChild(newBtn);

   // Clear the value of the input field
   input.value = "";
  
   
   
   newBtn.addEventListener("click",()=>{
      container.removeChild(newBtn);
      container.removeChild(newInput);
   });
});




