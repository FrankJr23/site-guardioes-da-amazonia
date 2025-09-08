document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "O Boto-cor-de-rosa, um dos símbolos da fauna amazônica, é o maior golfinho de água doce. Em quais bacias hidrográficas ele pode ser encontrado?",
            options: ["Bacia do Rio Nilo e Rio Congo.", "Bacia do Rio Amarelo e Rio Azul.", "Bacia do Rio Mississipi e Rio Colorado.", "Bacia do Rio Amazonas e Rio Orinoco."],
            answer: "Bacia do Rio Amazonas e Rio Orinoco."
        },
        {
            question: "Qual dos seguintes felinos é considerado o maior das Américas e um predador de topo de cadeia na Amazônia?",
            options: ["O leopardo-das-neves.", "O tigre siberiano.", "O guepardo.", "A onça-pintada."],
            answer: "A onça-pintada."
        },
        {
            question: "O peixe-boi da Amazônia, um mamífero aquático, é um herbívoro. Qual o principal papel ecológico desse animal no ecossistema fluvial?",
            options: ["Controlar a população de peixes menores.", "Servir como predador de topo de cadeia.", "Ajudar na dispersão de sementes de árvores ribeirinhas.", "Controlar o crescimento excessivo de plantas aquáticas."],
            answer: "Controlar o crescimento excessivo de plantas aquáticas."
        },
        {
            question: "Qual é a principal ameaça ao galo-da-serra (Rupicola rupicola), uma ave espetacular encontrada na Amazônia?",
            options: ["A falta de frutas em sua dieta.", "A predação por outros animais.", "A falta de locais para cortejo (leks).", "O roubo de filhotes para o comércio ilegal de animais."],
            answer: "O roubo de filhotes para o comércio ilegal de animais."
        },
        {
            question: "O que é o 'ponto de não retorno' na Amazônia, alertado pelo IPCC, e o que pode acontecer se ele for atingido?",
            options: ["Aumento das emissões de gases de efeito estufa, mas o bioma se recupera sozinho em 100 anos.", "Um ponto a partir do qual a degradação da floresta se torna irreversível, e ela pode se transformar em savana.", "O ponto em que a temperatura global começa a diminuir, revertendo o aquecimento global.", "A perda de 10% da fauna amazônica, sem impactos significativos no bioma."],
            answer: "Um ponto a partir do qual a degradação da floresta se torna irreversível, e ela pode se transformar em savana."
        },
        {
            question: "Qual porcentagem do bioma amazônico está localizado no Brasil?",
            options: ["Aproximadamente 40%.", "Aproximadamente 90%.", "Aproximadamente 25%.", "Cerca de 60%."],
            answer: "Cerca de 60%."
        },
        {
            question: "Qual é a relação entre o desmatamento na Amazônia e a emissão de gases de efeito estufa no Brasil?",
            options: ["O desmatamento na Amazônia não tem relação com a emissão de gases de efeito estufa.", "O desmatamento é responsável por menos de 10% das emissões de gases de efeito estufa.", "O desmatamento é responsável por quase metade das emissões de gases de efeito estufa do Brasil.", "O desmatamento ajuda a absorver gases de efeito estufa, o que diminui a poluição do ar."],
            answer: "O desmatamento é responsável por quase metade das emissões de gases de efeito estufa do Brasil."
        },
        {
            question: "Qual a principal função da floresta amazônica para o clima global?",
            options: ["A floresta aumenta a temperatura do planeta, o que a torna mais adaptável para a vida selvagem.", "A floresta diminui a quantidade de oxigênio no ar, o que a torna mais adaptável para a vida selvagem.", "A floresta absorve carbono da atmosfera, o que a torna um dos principais reguladores do clima global.", "A floresta produz uma quantidade de chuvas que diminui o nível de dióxido de carbono no ar."],
            answer: "A floresta absorve carbono da atmosfera, o que a torna um dos principais reguladores do clima global."
        },
        {
            question: "Qual dos seguintes países não tem parte de seu território na Amazônia?",
            options: ["Peru.", "Chile.", "Colômbia.", "Venezuela."],
            answer: "Chile."
        },
        {
            question: "O que é o 'ciclo de umidade' que a floresta amazônica altera, e por que isso é importante para o continente?",
            options: ["A Amazônia aumenta a umidade do ar, o que ajuda a diminuir a temperatura do planeta.", "A floresta consome a umidade do ar, o que a torna mais adaptável para a vida selvagem.", "A Amazônia produz umidade que é transportada por massas de ar, o que afeta o clima de outras regiões.", "A floresta ajuda a controlar o nível de chuvas, o que a torna mais adaptável para a vida selvagem."],
            answer: "A Amazônia produz umidade que é transportada por massas de ar, o que afeta o clima de outras regiões."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;

    const quizContent = document.getElementById('quiz-content');

    function renderQuestion() {
        answered = false;
        const currentQuestion = quizData[currentQuestionIndex];
        quizContent.innerHTML = `
            <div class="quiz-question-container">
                <p class="quiz-question">${currentQuestion.question}</p>
                <div class="quiz-options">
                    ${currentQuestion.options.map((option, index) =>
                        `<button class="quiz-option">${option}</button>`).join('')}
                </div>
            </div>
            <p class="quiz-status">Pergunta ${currentQuestionIndex + 1} de ${quizData.length}</p>
        `;
    }

    function handleAnswer(selectedOption, optionText) {
        if (answered) return;
        answered = true;
        const currentQuestion = quizData[currentQuestionIndex];

        if (optionText === currentQuestion.answer) {
            score++;
            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('incorrect');
            const correctOption = Array.from(document.querySelectorAll('.quiz-option')).find(btn => btn.textContent === currentQuestion.answer);
            if (correctOption) {
                correctOption.classList.add('correct');
            }
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                renderQuestion();
            } else {
                renderResults();
            }
        }, 1500);
    }

    function renderResults() {
        quizContent.innerHTML = `
            <div class="quiz-results">
                <h2>Quiz Concluído!</h2>
                <p>Sua pontuação final é ${score} de ${quizData.length}.</p>
                <button class="quiz-restart-btn">Tentar Novamente!</button>
            </div>
        `;
        document.querySelector('.quiz-restart-btn').addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            renderQuestion();
        });
    }

    quizContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('quiz-option')) {
            handleAnswer(e.target, e.target.textContent);
        }
    });

    renderQuestion();
});
