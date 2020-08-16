import React, { useState } from 'react'
import Question from './layouts/Question'
import Result from './layouts/Result'
import data from './assets/data.json'

const question = data.question
const answer = data.answer
const candidates = data.candidates

function App() {
  const [currentSection, setCurrentSection] = useState("question")
  const [candidate, setCandidate] = useState(candidates[0])

  const switchSection = (section) => setCurrentSection(section)

  const handleCandidate = (candidate) => setCandidate(candidate)

  return (
    <div>
      {currentSection === 'question'
        ?
        <Question
          question={question}
          candidate={candidate}
          candidates={candidates}
          handleCandidate={handleCandidate}
          switchSection={switchSection}
        />
        :
        <Result
          candidate={candidate}
          answer={answer}
          switchSection={switchSection}
        />
      }
    </div>
  );
}

export default App;
