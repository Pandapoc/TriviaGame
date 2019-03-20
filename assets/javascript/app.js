const questions = [
    {
        question = 'When do Pandas like to eat?',

        answers = {
            a: 'In the morning',
            b: 'Before bed',
            c: 'ALL THE TIME',
        },

        correctAnswer: c
    },
    {
        question = 'What do Pandas do for fun?',

        answers = {
            a: 'nap',
            b: 'exercise',
            c: 'hunt',
        },

        correctAnswer: a
    },
    {
        question = 'How much do Pandas eat a day?',

        answers = {
            a: '5 pounds of bamboo',
            b: '20 pounds of bamboo',
            c: '30 pounds of bamboo',
        },

        correctAnswer: c
    },
    {
        question = 'Why are Pandas the best animal?',

        answers = {
            a: 'They are fuffy',
            b: 'They are cute',
            c: 'Is this even a question?',
        },

        correctAnswer: c
    },
]

const quiz = document.querySelector('.quiz')
const result = document.querySelector('.result')
const next = document.querySelector('.next')

quizInit = _ =>{
    const output = []
    questions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = []

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                    <input type='radio' name='question${questionNumber}' value='${letter}'>
                    ${letter}
                    ${currentQuestion.answers[letter]}
                    </label>`
                )
            }
            output.push(
                `div class='question'> ${currentQuestion.question} </div>
                <div class='answers'> ${answers.join('')} </div>`
            )
        }
    )

    quizContainer.innerHTML = output.join('')
}

showResult = _ =>{

}

quizInit()

next.addEventListener('click', result)