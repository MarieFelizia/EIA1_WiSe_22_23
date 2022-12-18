window.addEventListener("load", function(): void{ 

    let enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement); 
    let tasksNumber: number = 0; 

    enter.addEventListener("keypress", function (event: KeyboardEvent): void { 
        if (event.key == "Enter") { 
            addTask();
            enter.value = " ";
        }
    });

    function addTask(): void { 

       const newDiv = document.createElement ("div");
       newDiv.className ="myClass";

        const Kreis: HTMLImageElement = document.createElement("img");
        Kreis.className = "checkBox"; 
        Kreis.setAttribute("src", "u5.svg");
        Kreis.setAttribute("width", "40");
        Kreis.setAttribute("height", "40");

        const Text: HTMLLabelElement = document.createElement("label");
        Text.innerHTML = enter.value; 
        Text.className = "taskText";
        Text.setAttribute("width", "600");
        Text.setAttribute("height", "40");

        const Haken: HTMLImageElement = document.createElement("img");
        Haken.className = "Haken";
        Haken.setAttribute("src", "u7.svg");
        Haken.setAttribute("width", "20");

        const trash: HTMLImageElement = document.createElement("img"); 
        trash.setAttribute("src", "u8.svg");
        trash.className = "trash"; 
        trash.setAttribute("width", "30"); 
        trash.setAttribute("height", "30")

        document.getElementById("toDoList").appendChild(newDiv); 
        newDiv.appendChild(Kreis); 
        newDiv.appendChild(Text); 
        newDiv.appendChild(trash); 
    

        Kreis.addEventListener("click", function(){ 
            newDiv.appendChild(Haken);

        })

        Haken.addEventListener("click", function(){ 
            newDiv.removeChild(Haken)
        })

        function deleteTask(div: HTMLDivElement): void { 
            newDiv.remove(); 

            tasksNumber--; 
            tasksAnzahl(); 
        };

        trash.addEventListener("click", function (event: MouseEvent): void { 
            console.log(event); 
            deleteTask(newDiv); 
        }); 

        tasksNumber++; 
        tasksAnzahl(); 
    }

        function tasksAnzahl(): void { 
            document.getElementById("counter").innerText = tasksNumber + " insgesamt"
        };



}); 