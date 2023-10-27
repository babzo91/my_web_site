function rep1() {
    const showp2 = document.querySelector("#page2")
    const hidep1 = document.querySelector(".d-on")

        var text = document.getElementById("rep1").value;
    
if (text !== "Oui" && text !== "oui" && text !== "Non" && text !== "non") {
     if (text =="") {
        alert("Faites un effort")
     }
     else
        alert("Vous avez écrit "+ text + ". Je vous ai pourtant dit qu'il ne comprends que oui ou non !");
    }

else

if (text == "Oui" || text == "oui") {
        alert("Qu'est ce vous faites sur cette page alors ?")
    }

if (text == "Non" || text == "non") {
        hidep1.classList.add("d-none")
        showp2.classList.remove("d-none")
       
    }
 
}
