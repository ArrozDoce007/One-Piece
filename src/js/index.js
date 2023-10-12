const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
    }); 
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function tocarSom1() {
    var audio = new Audio("./src/audios/chopper.mp3");
    audio.play();
}

function tocarSom2() {
    var audio = new Audio("./src/audios/zoro.mp3");
    audio.play();
}

function tocarSom3() {
    var audio = new Audio("./src/audios/luffy.mp3");
    audio.play();
}

function tocarSom4() {
    var audio = new Audio("./src/audios/nami.mp3");
    audio.play();
}

function tocarSom5() {
    var audio = new Audio("./src/audios/sanji.mp3");
    audio.play();
}