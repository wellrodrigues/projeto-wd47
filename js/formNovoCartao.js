(function(){

    const form = document.querySelector(".formNovoCartao")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        const textarea = form.querySelector(".formNovoCartao-conteudo")
        const isTextAreaVazio = textarea.value.trim().length === 0
        if(isTextAreaVazio){
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Você não digitou nada, Digite algo e tente novamente :)"

            const btnSubimit = form.children[form.children.length-1]
            form.addEventListener("animationend", function(event){
                event.target.remove()
            })
            form.insertBefore(msgErro, btnSubimit)
        }
    })
    form.classList.remove("no-js")
})()