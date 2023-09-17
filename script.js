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
    renderDom()

    let minhaDiv = document.querySelector(".box-render");
    let filhosDiv = minhaDiv.children;

    let i = 0;
    while (i < filhosDiv.length) {
        let filho = filhosDiv[i];

        if (filho.textContent.trim() === "" || filho.innerHTML.trim() === "") {
            filho.remove();
        } else {
            i++;
        }
    }
}

function verificarName(name) {
    let nomeVerificado;
  
    if (name === "jeniffer" || name === "__marques15") {
      nomeVerificado = "marques";
    } else if (name === "alessandra" || name === "aylli.est") {
        nomeVerificado = "ale";
    }

    return nomeVerificado;
}

function renderDom(){
    const mensagensObj = mensagens()
    
    divRender = cardMensagem(mensagensObj.msn1, mensagensObj.msn2, mensagensObj.msn3, mensagensObj.msn4);
    
    render.textContent = " "; 
    render.appendChild(divRender)
}

function cardMensagem (msn1, msn2, msn3, msn4){
    let divPai = document.createElement("div");
    let div = document.createElement("div");

    let mensagem1 = document.createElement("p");
    let mensagem2 = document.createElement("p");
    let mensagem3 = document.createElement("p");
    let mensagem4 = document.createElement("p");

    mensagem1.textContent = msn1;
    mensagem2.textContent = msn2;
    mensagem3.textContent = msn3;
    mensagem4.textContent = msn4;

    div.appendChild(mensagem1);
    div.appendChild(mensagem2);
    div.appendChild(mensagem3);
    div.appendChild(mensagem4);

    divPai.appendChild(div)

    mensagem4.classList.add("text-underline")
    divPai.classList.add("borde-render")
    div.classList.add("box-render")
    
    return divPai;
}

function mensagens () {
    const nome = verificarName(input.value.toLowerCase());
    let mensagem1
    let mensagem2
    let mensagem3
    let mensagem4

    switch(nome){
        case "marques" :
            mensagem1 = "Queria te dar uma rosa, mas acho que seria pouco, então criei esse universo para você.";
            mensagem2 = "Ao criar isso, percebi que a sua beleza supera todas as estrelas do universo.";
            mensagem3 = "Espero que goste do seu universo; passei 3 dias para deixá-lo perfeito para você.";
            mensagem4 = "Passando aqui para lembrar que você ainda vai ser minha.";
            break;
        case "ale" :
            mensagem1 = "Queria te dar uma rosa, mas acho que seria pouco, então criei esse universo para você.";
            mensagem2 = "E exaltar o quanto você é linda, perfeita.";
            mensagem3 = "Passando aqui para lembrar que você ainda vai ser minha.";
            break;
        case undefined :
            mensagem1 = "você não estar autorisado(a)"
    }
    return{
       msn1: mensagem1,
       msn2: mensagem2,
       msn3: mensagem3,
       msn4: mensagem4
    }
}