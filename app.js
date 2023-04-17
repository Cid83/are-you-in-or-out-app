const quizData = [
    {
      question: 'Who is the cutest person in the world?',
      a: 'Beyza Sanli',
      b: 'Adem Sanli',
      c: 'Didem Küçükkaraaslan',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'a',
    },
    {
      question: 'Who is the hungriest creature in the world?',
      a: 'Adem Sanli',
      b: 'Duman Sanli',
      c: 'Beyza Sanli',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'b',
    },
    {
      question: 'Who is the coolest man in the world?',
      a: 'Ali Çalişkan',
      b: 'Cem Zabci',
      c: 'Gürses Topcu',
      d: 'Adem Sanli',
      e: 'Onur Aslan',
      correct: 'd',
    },
    {
      question: 'Who is the cleanest woman in the world?',
      a: 'Cigdem Sanli',
      b: 'Bilgehan Zabci',
      c: 'Hayriye Celik',
      d: 'Nesibe Sanli',
      e: 'Arzu Caliskan',
      correct: 'c',
    },
    {
      question: ' Who is the person who loves being a mother \n the most in the world?',
      a: 'Alara Queen',
      b: 'Jane Ton',
      c: 'Clara white',
      d: 'Samanta Rain',
      e: 'Cigdem Sanli',
      correct: 'e',
    },
  ]

//   Variables Completed


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()



  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2 class="question"> Quiz Over,Your Score :  ${score * 20} " </h2>
      <button class="submit" onClick="location.reload()"> Try Again 🌀  </button>
    `
    }
  }
})
