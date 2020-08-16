import React from 'react'
import PropTypes from 'prop-types'
import { Radio, Button } from 'antd'

function Question(props) {
  const {
    question,
    candidate,
    candidates,
    handleCandidate,
    switchSection
  } = props

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="mt-5">
        <h3 className="question-text">{question}</h3>
      </div>
      <div className="mt-4">
        <Radio.Group
          onChange={e => handleCandidate(e.target.value)}
          value={candidate}
        >
          {candidates.map((value, index) => (
            <Radio key={index} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      
      <Button
        type="primary"
        className="mt-5"
        onClick={() => switchSection('answer')}
      >
        Validate Answer
      </Button>
    </div>
  )
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  candidate: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
  handleCandidate: PropTypes.func.isRequired,
  switchSection: PropTypes.func.isRequired
}

export default Question