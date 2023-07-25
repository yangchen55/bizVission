import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

import './joinbizvission.css'

export const CustomeForm = ({label, ...rest}) => {
  return (
    <div>
    <FloatingLabel
        controlId="floatingInput"
        label={label}
        className="mb-3"
      >
        <Form.Control {...rest} className='ddd' />
      </FloatingLabel>
    </div>
  )
}
