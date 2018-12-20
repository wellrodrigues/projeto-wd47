//javascript//
(function(){
    const btnAjuda = document.querySelector("#btnAjuda")
    btnAjuda.addEventListener("click", function(){
        const xhr = new XMLHttpRequest()
        xhr.open("GET", "https://ceep.herokuapp.com/cartoes/instrucoes")
        xhr.responseType = "json"
        xhr.send()
        xhr.addEventListener("load", function(){
            const objeto = xhr.response
            const ajudas = objeto.instrucoes

            ajudas.forEach(function(ajuda){
            adicionaCartaoNoMural(ajuda)
            })
        })
    })

    btnAjuda.classList.remove("no-js")

})()
//javascript//


//jquery//
//(function(){
//    const btnAjuda = $("#btnAjuda")
//    btnAjuda.click(function(){
//        const ajudas = [
//          "Bem vindo ao Ceep", "Clique no botão Linhas para mudar o layout"
//        ]
//
//        ajudas.forEach(function(ajuda){
//           alert(ajuda)
//        })
//    })
//    btnAjuda.removeClass("no-js")
//})()
//jquery//