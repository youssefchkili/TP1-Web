function start(){
    document.querySelector("button").addEventListener("click" , function(event){
        
        let name = document.getElementById("name").value;
        let content = document.getElementById("content").value;
        
        let div = document.createElement("div");
        div.style.backgroundColor = "#ffcccc";
        div.style.border = "2px solid red";
        div.style.width = "300px";  
        div.style.height = "50px";  
        div.style.fontSize = "15px"; 
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.padding = "10px";
        div.style.marginBottom = "10px";
        
        
        let text = document.createElement("span");
        text.id = "result";
        text.innerText = name + ": " + content;
        


        let button = document.createElement("button");
        button.innerText = "  🗑";

        
        

        
        button.addEventListener("click", function () {
            div.remove();
        });

        div.appendChild(text);
        div.appendChild(button);

        document.getElementById("tasks").append(div);

        document.getElementById("name").value = "";
        document.getElementById("content").value = "";
                
    })
}
start();