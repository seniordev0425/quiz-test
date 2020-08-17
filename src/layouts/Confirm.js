import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'

const cardStyle = {
  width: 500,
  textAlign: 'center'
}

function Confirm(props) {
  const {switchSection} = props

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <Card
        title='Confirm'
        style={cardStyle}
        headStyle={{ fontSize: '1.3rem', color: '#1890ff' }}
      >
        <h6 className="mt-5">Please confirm all answers again. Are you ready?</h6>
        <div className="mt-5 d-flex justify-content-around">
          <Button
            type="primary"
            onClick={() => switchSection('question')}
          >
            Back
          </Button>
          <Button
            type="primary"
            onClick={() => switchSection('result')}
          >
            Yes
          </Button>
        </div>
      </Card>
    </div>
  )
}

Confirm.propTypes = {
  switchSection: PropTypes.func.isRequired
}

export default Confirm