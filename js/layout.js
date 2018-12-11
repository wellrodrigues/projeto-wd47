var btnLayout = document.querySelector("#btnMudaLayout")
var mural = document.querySelector(".mural")

function alteraNome() {
    if(btnLayout.textContent == "Blocos") {
            btnLayout.textContent = "Linhas"
        } else {
            btnLayout.textContent = "Blocos"
        }
}

function mudaClasse () {
    mural.classList.toggle("mural--linha")
}

btnLayout.addEventListener ("click",function() {
    mudaClasse()
    alteraNome()
})