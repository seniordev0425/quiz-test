import React, { useState } from 'react'
import Question from './layouts/Question'
import Result from './layouts/Result'
import data from './assets/data.json'
import Confirm from './layouts/Confirm'

function App() {
  // This state is to handle 3 sections. Question, Confirm and Result.
  const [currentSection, setCurrentSection] = useState("question")

  // Quiz array data
  const [problems, setProblems] = useState(data.map((problem) => ({ ...problem, answer: '' })))
  
  // Current Quiz number. Default 0
  const [quizNumber, setQuizNumber] = useState(0)

  // Switch sections
  const switchSection = (section) => setCurrentSection(section)

  // Switch question whenever click on button prev or next
  const switchQuestion = (value) => {
    if (quizNumber === data.length - 1 && value === 1) { // if click on next in the last question then jump to confirm section
      switchSection('confirm')
    } else {
      // value is either -1 or 1
      setQuizNumber(quizNumber + value)
    }
  }

  // Update user's answer
  const handleAnswer = (value) => {
    setProblems(problems.map((problem, index) => (index === quizNumber ? { ...problem, answer: value } : problem)))
  }

  // Restart app
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
