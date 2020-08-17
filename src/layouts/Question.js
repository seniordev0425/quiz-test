import React from 'react'
import PropTypes from 'prop-types'
import {
  Radio,
  Button,
  Card
} from 'antd'
import data from '../assets/data.json'

const cardStyle = {
  width: 500,
  textAlign: 'center'
}

function Question(props) {
  const {
    quizNumber,
    question,
    list,
    answer,
    handleAnswer,
    switchQuestion,
  } = props

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <Card
        title={`${question} (${quizNumber + 1}/${data.length})`}
        style={cardStyle}
        headStyle={{ fontSize: '1.3rem', color: '#1890ff' }}
      >
        <div className="mt-4 d-flex justify-content-center">
          <Radio.Group
            onChange={e => handleAnswer(e.target.value)}
            value={answer}
          >
            {list.map((value, index) => (
              <Radio key={index} value={value}>
                {value}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="mt-5 d-flex justify-content-around">
          <Button
            type="primary"
            disabled={quizNumber === 0}
            onClick={() => switchQuestion(-1)}
          >
            Prev
          </Button>
          <Button
            type="primary"
            disabled={answer === ''}
            onClick={() => switchQuestion(1)}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  )
}

Question.propTypes = {
  quizNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  switchQuestion: PropTypes.func.isRequired
}

export default Question