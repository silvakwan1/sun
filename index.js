window.addEventListener("orientationchange", function () {
  if (window.orientation === 90 || window.orientation === -90) {
    document.querySelector(".title-text").remove();
  }
});

if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.querySelector(".title-text").textContent =
    "deite o telefone para melhor experiencia";
} else {
  document.querySelector(".title-text").remove();
}

let input = document.querySelector(".input"),
  botaoBuscar = document.querySelector("#verificar"),
  render = document.querySelector(".render"),
  modal = document.querySelector(".modal"),
  audio = document.querySelector("#audio"),
  botaoDesativarModal = document.querySelector(".desativei");

botaoBuscar.addEventListener("click", verificador);

botaoDesativarModal.addEventListener("click", () =>
  modal.classList.remove("ativei")
);

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    verificador();
  }
});

function verificador() {
  renderDom();

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
  const ativarModal = document.querySelector(".sun");
  ativarModal.addEventListener("click", () => {
    modal.classList.add("ativei");
  });
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

function renderDom() {
  const mensagensObj = mensagens();

  divRender = cardMensagem(
    mensagensObj.msn1,
    mensagensObj.msn2,
    mensagensObj.msn3,
    mensagensObj.msn4,
    mensagensObj.msn5
  );

  render.textContent = " ";
  render.appendChild(divRender);
}

function cardMensagem(msn1, msn2, msn3, msn4, msn5) {
  let divPai = document.createElement("div");
  let div = document.createElement("div");

  let mensagem1 = document.createElement("p"),
    mensagem2 = document.createElement("p"),
    mensagem3 = document.createElement("p"),
    mensagem4 = document.createElement("p"),
    mensagem5 = document.createElement("p");

  mensagem1.textContent = msn1;
  mensagem2.textContent = msn2;
  mensagem3.textContent = msn3;
  mensagem4.textContent = msn4;
  mensagem5.textContent = msn5;

  div.appendChild(mensagem1);
  div.appendChild(mensagem2);
  div.appendChild(mensagem3);
  div.appendChild(mensagem4);
  div.appendChild(mensagem5);

  divPai.appendChild(div);

  divPai.classList.add("borde-render");
  div.classList.add("box-render");

  return divPai;
}

function mensagens() {
  const nome = verificarName(input.value.toLowerCase());
  let mensagem1, mensagem2, mensagem3, mensagem4, mensagem5;

  switch (nome) {
    case "marques":
      mensagem1 =
        "Estava aqui pensando por que não te colocar para pensar um pouco?";
      mensagem2 = "Então pensei em uma charada.";
      mensagem3 =
        "Sou um gigante amarelo, quente e brilho no céu durante o dia, mas desapareço ao noite.";
      mensagem4 = "Quem sou eu?";
      mensagem5 = "click em mim na tela";
      document.querySelector("#sun").classList.add("sun");
      break;
    case "ale":
      mensagem1 =
        "Queria te dar uma rosa, mas acho que seria pouco, então criei esse universo para você.";
      mensagem2 = "E exaltar o quanto você é linda, perfeita.";
      mensagem3 = "Passando aqui para lembrar que você ainda vai ser minha.";
      break;
    case undefined:
      mensagem1 = "você não estar autorisado(a)";
      break;
  }

  return {
    msn1: mensagem1,
    msn2: mensagem2,
    msn3: mensagem3,
    msn4: mensagem4,
    msn5: mensagem5,
  };
}

let intervalId;

function toggleMusic() {
  const numero = numeroRandom();
  console.log(numero);
  audio.src = `./audio/audio${numero}.mp3`;
  toggleNameMusic(numero);
}

function onAudioPause() {
  intervalId = setInterval(toggleMusic, 3000);
}

function onAudioEnded() {
  toggleMusic();
  audio.play();
}

audio.addEventListener("pause", onAudioPause);
audio.addEventListener("ended", onAudioEnded);

intervalId = setInterval(toggleMusic, 5000);

function numeroRandom() {
  const random = Math.random();
  const numero = Math.floor(random * 25);

  const newNumero = numero <= 9 ? "0" + numero : numero;

  return newNumero;
}

audio.addEventListener("play", () => {
  console.log("parei");
  clearInterval(intervalId);
});

function toggleNameMusic(num) {
  ///const toggleCantor = numeroRandom();
  const nameMusic = nameAndcantor();
  document.querySelector(".cantor").textContent = nameMusic[num];
  console.log(nameMusic[num]);
}

function nameAndcantor() {
  return {
    "00": "Leão - xama",
    "01": "Minha cura - mc cabelinho",
    "02": "Amor Sem Medida - mathes e kauan",
    "03": "Segredo - kayblack",
    "04": "Poesia Acústica 9",
    "05": "Poesia Acústica 13",
    "06": "Poesia Acústica 14",
    "07": "Poesia Acústica 9",
    "08": "O poder dessa garota - mc gabzin",
    "09": "Erro que dá certo - thiago aquino",
    10: "Mande um sinal - silvanno salles",
    11: "Mudando de assunto - henrique e juliano",
    12: "De copo em copo",
    13: "Vem pra minha vida - henrique e juliano",
    14: "Traumatizei - henrique e juliano",
    15: "Nosso quadro - ana castela",
    16: "Poesia Acústica 14",
    17: "Contramão - gustavo mioto",
    18: "Duas - nadson ferinha",
    19: "Antônimos - jorge e mateus",
    20: "Louca de saudade - jorge e mateus",
    21: "sal e pimenta - kayblack",
    22: "Minha cura - mc cabelinho",
    23: "Apê 1001 - bin",
    24: "Gostava Tanto De Você - Tim Maia",
  };
}
