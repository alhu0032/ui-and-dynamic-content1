
let ui = document.querySelector("#my-input");
let btn = document.querySelector("#button-input");
let feedback = document.querySelector(".feedback");
let ul = document.querySelector("#myUL");

function addItem() {
    let li = document.createElement("li");
    
    if (ui.value) {
        
        li.textContent = ui.value;
    
        ul.appendChild(li);
       
        feedback.textContent = "Your item was added ";
    
        ui.value= " ";
    
        ui.focus();
    }else {
	feedback.textContent = "Please add your item to the list  ";
	
}
}
btn.addEventListener("click", addItem);
