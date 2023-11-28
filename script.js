

function generarTexto(){
    const text = document.querySelector("#text").value
    let newP = document.createElement("p");
    console.log(newP)
    newP.innerHTML = text
    
    const contenedor = document.querySelector("#div1")
    contenedor.appendChild(newP); 

}

