function start(){
    document.querySelectorAll("li").forEach(li => {

    li.addEventListener("click" , function(){
        let n1 = Math.floor(Math.random() * 256);
        let n2 = Math.floor(Math.random() * 256);
        let n3 = Math.floor(Math.random() * 256);

        let randomColor = "rgb(" + n1 + ", " + n2 + ", " + n3 + ")";
        this.style.color = randomColor; 
    })
    })
}
start();