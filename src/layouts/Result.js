import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Rate, Card } from 'antd'

const cardStyle = {
  width: 500,
  textAlign: 'center'
}

function Result(props) {
  const {
    problems,
    restart
  } = props

  const [score, setScore] = useState(0)

  useEffect(() => { // Calculate score
    let tmpScore = 0
    problems.forEach((problem) => {
      if (problem.answer === problem.correct_answer) tmpScore ++
    })
    setScore(tmpScore)
  }, [])

  const showAnswers = () => {
    return (
      problems.map((problem, index) =>
        <div key={index} className="mt-4">
          <div>{`${index + 1}. ${problem.question}`}</div>
          <div>
            {problem.answer === problem.correct_answer &&
              <span className="ml-3 correct-answer-text">
                {problem.answer}
              </span>
            }
            {problem.answer !== problem.correct_answer &&
              <div>
                <span className="ml-3 wrong-answer-text">
                  {problem.answer}
                </span>
                <span className="ml-3 correct-answer-text">
                  {problem.correct_answer}
                </span>
              </div>
            }
          </div>
        </div>
      )
    )
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <Card
        title={score === problems.length ? 'Congratulation!' : 'Try again'}
        style={cardStyle}
        headStyle={{ fontSize: '1.3rem', color: '#1890ff' }}
      >
        <div>
          <Rate
            disabled
            value={score}
            count={problems.length}
          />
        </div>
        <div className="text-left w-50 m-auto">
          {showAnswers()}
        </div>
        <Button
          type="primary"
          className="mt-5"
          onClick={restart}
        >
          Restart
      </Button>
      </Card>
    </div>
  )
}

Result.propTypes = {
  problems: PropTypes.array.isRequired,
  restart: PropTypes.func.isRequired
}

export default Result