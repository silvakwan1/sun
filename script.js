let input = document.querySelector(".input"),
    botaoBuscar = document.querySelector("#verificar"),
    render = document.querySelector(".render");

botaoBuscar.addEventListener("click", verificador);

input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        verificador()
    }
});
    
function verificador(){
    let msn = verificar(input.value)
    if(msn === undefined){
        msn = "você não estar autorisado(a)"
        renderDom(msn)
        console.log("bom dia")
    }
    renderDom(msn)
    console.log(verificar(input.value))
}

function renderDom(mensagem){
    let paragrafo = document.createElement("p")

    paragrafo.textContent = mensagem
    paragrafo.classList.add("text-render")
    if(mensagem === "você não estar autorisado(a)"){
        render.textContent = " "
        paragrafo.classList.add("erro")
        render.appendChild(paragrafo)
    }else{
        
        render.textContent = " "
        render.appendChild(paragrafo)
    }
}

function verificar(name) {
    let nomeVerificado;
  
    if (name === "jeni" || name === "gabi") {
      nomeVerificado = "marques voce e perfeita maravilhosa receba essa galaxia de presente";
    } else if (name === "lusia" || name === "bia") {
      nomeVerificado = "perfeita maravilhosa receba essa galaxia de presente";
    } else if (name === "jei" || name === "laiz") {
      nomeVerificado = "marques voce e perfeita me";
    }
    return nomeVerificado;
}
//"validador"
//"input"
//"verificar"
//"render"