let Enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement)
let taskNumber: number = 0

Enter.addEventListener("keypress", function (event: KeyboardEvent): void { 
    if (event.key == "enter") { 
        addTask(); 
        Enter.value = " "; 
    }
}); 

function addTask(): void { 

}

const wrapper = document.querySelector(".wrapper")
const newDiv = document.createElement("div")
newDiv.className = "myClass"
newDiv.id = "myId"
newDiv.innerHTML = "essen"


wrapper.appendChild(newDiv)
