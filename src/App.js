import React, { useState } from 'react'
import Question from './layouts/Question'
import Result from './layouts/Result'
import data from './assets/data.json'
import Confirm from './layouts/Confirm'

function App() {
  const [currentSection, setCurrentSection] = useState("question")

  const [problems, setProblems] = useState(data.map((problem) => ({ ...problem, answer: '' })))
  const [quizNumber, setQuizNumber] = useState(0)

  const switchSection = (section) => setCurrentSection(section)

  const switchQuestion = (value) => {
    if (quizNumber === data.length - 1 && value === 1) {
      switchSection('confirm')
    } else {
      setQuizNumber(quizNumber + value)
    }
  }

  const handleAnswer = (value) => {
    setProblems(problems.map((problem, index) => (index === quizNumber ? { ...problem, answer: value } : problem)))
  }

  const restart = () => {
    setQuizNumber(0)
    setProblems(data.map((problem) => ({ ...problem, answer: '' })))
    switchSection('question')
  }

  const renderBody = () => {
    switch (currentSection) {
      case 'question':
        return (
          <Question
            quizNumber={quizNumber}
            question={problems[quizNumber].question}
            list={problems[quizNumber].list}
            answer={problems[quizNumber].answer}
            handleAnswer={handleAnswer}
            switchQuestion={switchQuestion}
          />
        )
      case 'confirm':
        return (
          <Confirm
            switchSection={switchSection}
          />
        )
      case 'result':
        return (
          <Result
            problems={problems}
            restart={restart}
          />
        )
    }
  }

  return (
    <div>
      {renderBody()}
    </div>
  );
}

export default App
