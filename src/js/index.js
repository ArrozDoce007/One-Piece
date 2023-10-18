let audioAtual;
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const nomesAudios = ["luffy.mp3", "zoro.mp3", "nami.mp3", "mar sunny.mp3", "usopp.mp3", "sanji.mp3", "chopper.mp3"];

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        if (audioAtual) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }

        tocarSom(nomesAudios[indice]);
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

function tocarSom(nomeAudio) {
    audioAtual = new Audio(`./src/audios/${nomeAudio}`);
    audioAtual.play();
}
