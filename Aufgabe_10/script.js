let Enter = document.getElementById("inputText");
let taskNumber = 0;
Enter.addEventListener("keypress", function (event) {
    if (event.key == "enter") {
        addTask();
        Enter.value = " ";
    }
});
function addTask() {
}
const wrapper = document.querySelector(".wrapper");
const newDiv = document.createElement("div");
newDiv.className = "myClass";
newDiv.id = "myId";
newDiv.innerHTML = "essen";
wrapper.appendChild(newDiv);
//# sourceMappingURL=script.js.map