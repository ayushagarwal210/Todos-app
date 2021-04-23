import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  let myStyle = {
    minHeight: '70vh',
  }
  return (
    <div className="container" style={myStyle}>
      <h1>Todos-List</h1>
      {props.todos.length === 0
        ? 'No todos to display'
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            )
          })}
    </div>
  )
}
