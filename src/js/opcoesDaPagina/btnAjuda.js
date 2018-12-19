//javascript//
(function(){
    const btnAjuda = document.querySelector("#btnAjuda")
    btnAjuda.addEventListener("click", function(){
        const ajudas = [
            {conteudo: "Bem vindo ao Ceep", cor: "#F05450"}, 
            {conteudo: "Clique no botão Linhas para mudar o layout", cor: "#92C4EC"}
        ]

        ajudas.forEach(function(ajuda){
           adicionaCartaoNoMural(ajuda)
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