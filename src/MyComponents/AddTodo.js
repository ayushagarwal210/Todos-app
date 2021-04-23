import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const AddTodo = (props) => {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const submit = (event) => {
    event.preventDefault()
    if (!title || !desc) {
      alert('Title or description feild is Empty')
    } else {
      props.addTodo(title, desc)
      settitle('')
      setdesc('')
    }
  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group controlId="title">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => {
              settitle(event.target.value)
            }}
            placeholder="Enter todo title"
          />
        </Form.Group>

        <Form.Group controlId="Todo desc">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(event) => {
              setdesc(event.target.value)
            }}
            placeholder="Todo description"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  )
}
