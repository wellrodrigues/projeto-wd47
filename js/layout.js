var btnLayout = document.querySelector("#btnMudaLayout")
function alteraNome() {
    if(btnLayout.textcontent == "blocos") {
            btnLayout.textContent = "Linhas"
        } else {
            btnLayout.textContent = "Blocos"
        }
}

btnLayout.onclick = alteraNome