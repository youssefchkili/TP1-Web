function configurer(){
    alert(1);
    document.querySelector("#couleur").addEventListener("blur" , function(event) {
        document.querySelector("textarea").style.color = document.querySelector("#couleur").value;
    });
    alert(2);
    document.querySelector("#fontsize").addEventListener("click" , function(event) {
        document.querySelector("textarea").style.fontSize = document.querySelector("#fontsize").value + "px";
    });
    alert(3);
    document.querySelector("#fontfamily").addEventListener("click" , function(event) {
        document.querySelector("textarea").style.fontFamily = document.querySelector("#fontfamily").value;
    });
    alert(4);
    
}
configurer();