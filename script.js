// ========================================
// 50 FRASES MOTIVACIONAIS
// ========================================

const frases = {

    cansaco: [
        "Você está cansado, não derrotado. Descanse o necessário e continue quando estiver pronto. 💪",
        "Nem todo dia precisa ser produtivo. Às vezes, descansar também faz parte da jornada. 🌙",
        "Você não precisa carregar o mundo inteiro hoje. Faça o que conseguir e tenha orgulho disso. ❤️",
        "Respire. Você já chegou muito mais longe do que imagina. Um passo de cada vez. 🌱",
        "Seu cansaço não apaga tudo o que você já conquistou. Você ainda está avançando. 🚀"
    ],

    estudo: [
        "Talvez você ainda não saiba, mas cada minuto de estudo está construindo a pessoa que você quer ser. 📚",
        "Não precisa entender tudo de uma vez. Aprender é subir uma escada, degrau por degrau. 🧠",
        "A dificuldade de hoje pode ser exatamente o que vai tornar sua conquista de amanhã ainda mais especial. 🎓",
        "Continue estudando mesmo quando parecer difícil. Seu futuro vai agradecer por você não ter desistido. 📖",
        "Você não precisa ser o melhor da sala. Só precisa continuar tentando ser melhor do que ontem. ✨"
    ],

    trabalho: [
        "Seu esforço pode não ser reconhecido imediatamente, mas isso não significa que ele não tenha valor. 💼",
        "Um dia difícil no trabalho não define sua capacidade. Amanhã é uma nova oportunidade. 🚀",
        "Faça o seu melhor, mas lembre-se: você é muito mais do que aquilo que produz. ❤️",
        "Continue construindo seu caminho. Grandes resultados são feitos de pequenas atitudes repetidas. 🏆",
        "Você é capaz de superar desafios maiores do que imagina. Confie no seu potencial. 💪"
    ],

    dinheiro: [
        "Uma fase financeira difícil não define seu futuro. Situações mudam, oportunidades aparecem e você pode recomeçar. 💰",
        "Não compare seu capítulo 2 com o capítulo 20 de outra pessoa. Sua jornada tem seu próprio tempo. 🌱",
        "Dinheiro pode ser um problema, mas não precisa ser o fim da sua esperança. Continue buscando soluções. 🚀",
        "Começar pequeno ainda é começar. Grandes conquistas financeiras também nascem de pequenos passos. 💎",
        "Você pode reconstruir. Talvez leve tempo, mas cada decisão inteligente é um passo para uma vida melhor. 🌟"
    ],

    amor: [
        "Se alguém não reconheceu seu valor, isso não significa que você não tenha valor. ❤️",
        "Você merece um amor que traga paz, respeito e reciprocidade. Nunca aceite menos por medo de ficar sozinho. 💛",
        "Às vezes, perder alguém abre espaço para você reencontrar a si mesmo. 🌻",
        "Seu coração pode estar machucado agora, mas ele vai encontrar motivos para sorrir novamente. 🦋",
        "Não deixe uma história que terminou fazer você acreditar que sua felicidade também terminou. 🌈"
    ],

    tristeza: [
        "Está tudo bem não estar bem o tempo inteiro. Permita-se sentir, respirar e continuar no seu ritmo. ❤️",
        "Essa tristeza é um momento da sua história, não a história inteira. Dias melhores ainda podem chegar. 🌈",
        "Você não precisa fingir que está forte. Só precisa continuar aqui, um dia de cada vez. 🌻",
        "Até as noites mais longas terminam quando o sol nasce. Aguente mais um pouco. ☀️",
        "Seu sorriso pode estar escondido hoje, mas ele ainda está aí dentro de você. ✨"
    ],

    medo: [
        "Coragem não é não sentir medo. É continuar mesmo quando o medo aparece. 🦁",
        "Você não precisa ter certeza de tudo para dar o próximo passo. Confie e vá. 🚀",
        "Talvez dê errado. Talvez dê certo. Mas você nunca saberá se não tentar. 🔥",
        "O medo está tentando proteger você, mas seus sonhos também merecem uma chance. 🌟",
        "Você já enfrentou momentos que pareciam impossíveis antes. Você consegue enfrentar este também. 💪"
    ],

    fracasso: [
        "Falhar não significa ser um fracasso. Significa que você tentou algo e ganhou experiência para tentar novamente. 🔥",
        "Uma derrota é apenas uma vírgula na sua história, não o ponto final. 📖",
        "Errar faz parte de aprender. Não transforme um erro em uma sentença sobre quem você é. 🌱",
        "Você não perdeu tudo. Você descobriu uma maneira que não funcionou. Agora tente de outro jeito. 🚀",
        "Grandes conquistas quase nunca acontecem sem tropeços pelo caminho. Continue. 🏆"
    ],

    solidão: [
        "Estar sozinho agora não significa que você estará sozinho para sempre. Novas pessoas ainda podem entrar na sua vida. 🦋",
        "Sua companhia também importa. Aprenda a gostar da pessoa que você encontra quando olha para dentro. ❤️",
        "Você merece conexões verdadeiras. Não tenha pressa para encontrar pessoas que realmente combinam com você. 🌻",
        "Mesmo quando parece que ninguém entende você, sua existência continua tendo valor. 💛",
        "Use esse momento para se conhecer melhor. Às vezes, grandes recomeços começam no silêncio. 🌙"
    ],

    futuro: [
        "Você não precisa saber exatamente onde estará daqui a cinco anos. Apenas escolha um bom próximo passo. 🚀",
        "Seu futuro ainda não foi escrito. Existem possibilidades que você nem imagina esperando por você. ✨",
        "Não tenha medo do que vem pela frente. Você vai aprender, crescer e se adaptar pelo caminho. 🌟",
        "O futuro pertence a quem continua caminhando mesmo sem enxergar o caminho inteiro. 💪",
        "Talvez sua melhor fase ainda nem tenha começado. Continue. 🌈"
    ]
};


// ========================================
// FRASES GERAIS
// ========================================

const frasesGerais = [
    "Você é mais forte do que pensa e mais capaz do que imagina. 💪",
    "Não desista só porque está difícil. Muitas vezes, é justamente antes da conquista que tudo parece mais complicado. 🔥",
    "Você não precisa correr. Só não pare de caminhar. 🌱",
    "Acredite em você, mesmo que hoje essa seja a coisa mais difícil a fazer. ❤️",
    "Pequenos passos também levam a grandes lugares. Continue. 🚀",
    "Você já venceu dias que achou que não conseguiria superar. Lembre-se disso. 🏆",
    "Não compare sua jornada com a de ninguém. Seu caminho é único. 🌈",
    "Você não precisa ser perfeito para ser incrível. ✨",
    "Talvez você esteja mais perto da sua conquista do que imagina. Não pare agora. 🔥",
    "A sua história ainda está sendo escrita. Faça com que os próximos capítulos sejam incríveis. 📖"
];


// ========================================
// PALAVRAS-CHAVE
// ========================================

const categorias = {

    cansaco: [
        "cansado",
        "cansaço",
        "exausto",
        "exausta",
        "sem energia",
        "esgotado",
        "esgotada",
        "疲"
    ],

    estudo: [
        "estudar",
        "estudo",
        "prova",
        "escola",
        "faculdade",
        "universidade",
        "enem",
        "vestibular",
        "nota",
        "professor",
        "trabalho escolar",
        "matéria"
    ],

    trabalho: [
        "trabalho",
        "emprego",
        "chefe",
        "empresa",
        "carreira",
        "trabalhar",
        "profissão",
        "colega"
    ],

    dinheiro: [
        "dinheiro",
        "financeiro",
        "finanças",
        "pobre",
        "dívida",
        "divida",
        "conta",
        "salário",
        "salario",
        "desempregado",
        "desempregada"
    ],

    amor: [
        "amor",
        "namorado",
        "namorada",
        "relacionamento",
        "terminou",
        "término",
        "termino",
        "ex",
        "coração",
        "coracao",
        "apaixonado",
        "apaixonada"
    ],

    tristeza: [
        "triste",
        "tristeza",
        "chorar",
        "chorando",
        "choro",
        "mal",
        "deprimido",
        "deprimida",
        "infeliz",
        "sofrendo"
    ],

    medo: [
        "medo",
        "assustado",
        "assustada",
        "receio",
        "ansioso",
        "ansiosa",
        "ansiedade",
        "nervoso",
        "nervosa",
        "preocupado",
        "preocupada"
    ],

    fracasso: [
        "fracassei",
        "fracasso",
        "falhei",
        "falha",
        "errei",
        "erro",
        "perdi",
        "perder",
        "derrota",
        "não consegui",
        "nao consegui"
    ],

    solidão: [
        "sozinho",
        "sozinha",
        "solidão",
        "solidao",
        "ninguém",
        "ninguem",
        "abandonado",
        "abandonada",
        "isolado",
        "isolada"
    ],

    futuro: [
        "futuro",
        "amanhã",
        "amanha",
        "vida",
        "objetivo",
        "sonho",
        "sonhos",
        "meta",
        "metas",
        "não sei o que fazer",
        "nao sei o que fazer"
    ]
};


// ========================================
// ENCONTRAR CATEGORIA
// ========================================

function encontrarCategoria(texto) {

    texto = texto.toLowerCase();

    let melhorCategoria = null;
    let maiorPontuacao = 0;

    for (const categoria in categorias) {

        let pontuacao = 0;

        categorias[categoria].forEach(palavra => {

            if (texto.includes(palavra.toLowerCase())) {
                pontuacao++;
            }

        });

        if (pontuacao > maiorPontuacao) {
            maiorPontuacao = pontuacao;
            melhorCategoria = categoria;
        }
    }

    return melhorCategoria;
}


// ========================================
// GERAR MOTIVAÇÃO
// ========================================

function gerarMotivacao() {

    const input = document.getElementById("userText");
    const resultado = document.getElementById("resultado");
    const novaFrase = document.getElementById("novaFrase");

    const texto = input.value.trim();

    if (texto === "") {

        resultado.classList.add("mostrar");

        resultado.innerHTML = `
            <div class="resultado-icon">🤔</div>
            <p>
                Conte um pouco do que está acontecendo.
                Eu quero ouvir você. 💛
            </p>
        `;

        novaFrase.style.display = "none";

        return;
    }

    const categoria = encontrarCategoria(texto);

    let frase;

    if (categoria && frases[categoria]) {

        const lista = frases[categoria];

        frase = lista[
            Math.floor(Math.random() * lista.length)
        ];

    } else {

        frase = frasesGerais[
            Math.floor(Math.random() * frasesGerais.length)
        ];
    }

    resultado.innerHTML = `
        <div class="resultado-icon">💛</div>
        <p>${frase}</p>
    `;

    resultado.classList.remove("mostrar");

    // Pequeno atraso para reiniciar a animação
    setTimeout(() => {
        resultado.classList.add("mostrar");
    }, 50);

    novaFrase.style.display = "block";
}


// ========================================
// ENTER PARA GERAR
// ========================================

document.getElementById("userText").addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        gerarMotivacao();
    }

});
