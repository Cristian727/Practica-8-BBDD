

function generarTexto(){
    const text = document.querySelector("#text").value
    let newP = document.createElement("p");
    console.log(newP)
    newP.innerHTML = text
    
    const contenedor = document.querySelector("#div1")
    contenedor.appendChild(newP); 

}

function roll(){
    
const data = document.querySelector("#input_dados").value
console.log(data)
const tirada = data.split("d")
console.log(tirada)

const mis_dados = []
console.log(tirada[0])
for (let i = 0; i < tirada[0]; i++){
    const resultado = Math.floor(Math.random() * tirada[1] + 1)
    mis_dados.push(resultado)
}
console.log(mis_dados)
}