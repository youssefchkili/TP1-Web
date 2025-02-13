function configurer(){ 
    document.querySelector("button").addEventListener("click", function(event){
    
        game(document.querySelector("select").selectedIndex);
    });
}


function game(x){
    var number = Math.round(Math.random()*(x+1)*5 + 1);
    var essai = 3-x;
    while(essai>0){
        let reponse = prompt("Can you guess the number between 0 and " + (x+1)*5 + ".You have "+ essai + "left"); 
        essai --;
        if(reponse == number){
            alert("Félicitations");
            break;
        }else if(essai!=0){
            alert("esaayer une autre fois");
        }else{
            alert("Dommage");
        }
    }


}
configurer();
