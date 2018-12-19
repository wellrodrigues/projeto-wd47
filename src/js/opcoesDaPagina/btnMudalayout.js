var btn = document.querySelector("#btnMudaLayout")
var mural = document.querySelector(".mural")

function alteraNome() {
    if(btn.textContent == "Blocos") {
            btn.textContent = "Linhas"
        } else {
            btn.textContent = "Blocos"
        }
}

function mudaClasse () {
    mural.classList.toggle("mural--linha")
}

btn.addEventListener ("click",function() {
    mudaClasse()
    alteraNome()
})

btn.classList.remove("no-js")