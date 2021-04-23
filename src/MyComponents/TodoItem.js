import React from 'react'
import Button from 'react-bootstrap/Button'

export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="container m-2">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <Button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo)
        }}
      >
        Delete
      </Button>
    </div>
  )
}
