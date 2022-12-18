window.addEventListener("load", function () {
    let enter = document.getElementById("inputText");
    let tasksNumber = 0;
    enter.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            enter.value = " ";
        }
    });
    function addTask() {
        const newDiv = document.createElement("div");
        newDiv.className = "myClass";
        const Kreis = document.createElement("img");
        Kreis.className = "checkBox";
        Kreis.setAttribute("src", "u5.svg");
        Kreis.setAttribute("width", "40");
        Kreis.setAttribute("height", "40");
        const Text = document.createElement("label");
        Text.innerHTML = enter.value;
        Text.className = "taskText";
        Text.setAttribute("width", "600");
        Text.setAttribute("height", "40");
        const Haken = document.createElement("img");
        Haken.className = "Haken";
        Haken.setAttribute("src", "u7.svg");
        Haken.setAttribute("width", "20");
        const trash = document.createElement("img");
        trash.setAttribute("src", "u8.svg");
        trash.className = "trash";
        trash.setAttribute("width", "30");
        trash.setAttribute("height", "30");
        document.getElementById("toDoList").appendChild(newDiv);
        newDiv.appendChild(Kreis);
        newDiv.appendChild(Text);
        newDiv.appendChild(trash);
        Kreis.addEventListener("click", function () {
            newDiv.appendChild(Haken);
        });
        Haken.addEventListener("click", function () {
            newDiv.removeChild(Haken);
        });
        function deleteTask(div) {
            newDiv.remove();
            tasksNumber--;
            tasksAnzahl();
        }
        ;
        trash.addEventListener("click", function (event) {
            console.log(event);
            deleteTask(newDiv);
        });
        tasksNumber++;
        tasksAnzahl();
    }
    function tasksAnzahl() {
        document.getElementById("counter").innerText = tasksNumber + " insgesamt";
    }
    ;
});
//# sourceMappingURL=script.js.map