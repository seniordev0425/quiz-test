import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

function Result(props) {
  const {
    candidate,
    answer,
    switchSection
  } = props

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="mt-5">
        <h3 className={candidate === answer && 'question-text'}>
          {candidate !== answer
            ?
            'Oops! Please try again'
            :
            'Congratulation!'
          }
        </h3>
      </div>

      <Button
        type="primary"
        className="mt-5"
        onClick={() => switchSection('question')}
      >
        Try again
      </Button>
    </div>
  )
}

Result.propTypes = {
  candidate: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  switchSection: PropTypes.func.isRequired
}

export default Result