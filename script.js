const perguntas = [
    {
        pergunta: "Como a tecnologia pode ajudar na prevenção de doenças?",
        respostas: [
            "Monitorando a saúde",
            "Aumentando o consumo de açúcar",
            "Diminuindo o tempo de sono",
            "Evitando consultas médicas"
        ],
        correta: 0
    },

    {
        pergunta: "O que é telemedicina?",
        respostas: [
            "Um tipo de remédio",
            "Atendimento médico realizado à distância",
            "Um jogo eletrônico",
            "Uma máquina de exercícios"
        ],
        correta: 1
    },

    {
        pergunta: "Como os aplicativos de saúde podem ajudar?",
        respostas: [
            "Acompanhando exercícios e alimentação",
            "Substituindo todos os médicos",
            "Causando doenças",
            "Impedindo atividades físicas"
        ],
        correta: 0
    },

    {
        pergunta: "Como a inteligência artificial pode ajudar na medicina?",
        respostas: [
            "Auxiliando na análise de exames",
            "Eliminando todos os hospitais",
            "Substituindo todos os médicos",
            "Impedindo diagnósticos"
        ],
        correta: 0
    },

    {
        pergunta: "O que um relógio inteligente pode monitorar?",
        respostas: [
            "Batimentos cardíacos",
            "Altura de prédios",
            "Velocidade de carros",
            "Temperatura das cidades"
        ],
        correta: 0
    },

    {
        pergunta: "Qual pode ser uma consequência do uso excessivo do celular?",
        respostas: [
            "Melhor visão",
            "Problemas de sono",
            "Aumento da força física",
            "Melhor postura"
        ],
        correta: 1
    },

    {
        pergunta: "Como a tecnologia pode ajudar pessoas com deficiência?",
        respostas: [
            "Criando ferramentas de acessibilidade",
            "Dificultando a comunicação",
            "Impedindo o acesso à informação",
            "Eliminando tratamentos"
        ],
        correta: 0
    },

    {
        pergunta: "A tecnologia pode ajudar na saúde mental?",
        respostas: [
            "Não",
            "Sim, por meio de ferramentas e terapias digitais",
            "Somente por meio de jogos",
            "Apenas dentro de hospitais"
        ],
        correta: 1
    },

    {
        pergunta: "Como robôs podem ser utilizados na medicina?",
        respostas: [
            "Auxiliando em procedimentos e cirurgias",
            "Substituindo todos os médicos",
            "Controlando o trânsito",
            "Fabricando alimentos"
        ],
        correta: 0
    },

    {
        pergunta: "Por que os dados de saúde precisam ser protegidos?",
        respostas: [
            "Porque são informações pessoais",
            "Porque não possuem importância",
            "Porque servem para jogos",
            "Porque não podem ser armazenados"
        ],
        correta: 0
    }
];


let perguntaAtual = 0;
let pontos = 0;


const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const comecar = document.getElementById("comecar");
const jogarNovamente =
    document.getElementById("jogarNovamente");

const pergunta =
    document.getElementById("pergunta");

const alternativas =
    document.getElementById("alternativas");

const proxima =
    document.getElementById("proxima");

const contador =
    document.getElementById("contador");

const pontuacao =
    document.getElementById("pontuacao");

const progresso =
    document.getElementById("progresso");

const resultadoPontos =
    document.getElementById("resultadoPontos");

const tituloResultado =
    document.getElementById("tituloResultado");

const mensagemResultado =
    document.getElementById("mensagemResultado");

const resultadoIcone =
    document.getElementById("resultadoIcone");


function trocarTela(tela) {

    document.querySelectorAll(".tela")
        .forEach(elemento => {
            elemento.classList.remove("ativa");
        });

    tela.classList.add("ativa");
}


function iniciarJogo() {

    perguntaAtual = 0;

    pontos = 0;

    pontuacao.textContent = "⭐ 0";

    trocarTela(quiz);

    mostrarPergunta();
}


function mostrarPergunta() {

    const atual = perguntas[perguntaAtual];

    pergunta.textContent = atual.pergunta;

    contador.textContent =
        `${String(perguntaAtual + 1).padStart(2, "0")} / ${perguntas.length}`;

    const porcentagem =
        ((perguntaAtual) / perguntas.length) * 100;

    progresso.style.width =
        `${porcentagem}%`;

    alternativas.innerHTML = "";

    proxima.style.display = "none";


    atual.respostas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement("button");

            botao.className =
                "alternativa";

            botao.textContent =
                texto;

            botao.addEventListener(
                "click",
                () => responder(botao, indice)
            );

            alternativas.appendChild(botao);
        }
    );
}


function responder(botao, indice) {

    const atual =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(
<
...
