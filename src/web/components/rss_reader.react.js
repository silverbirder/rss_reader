import React from 'react'
import createReactClass from 'create-react-class'

export default createReactClass({
  render() {
    const {
      todos,
      addTodo,
    } = this.props

    return (
      <div>
        <ul>
        {todos.map((todo, i) =>
          <li key={i}>{ todo.text }</li>
        )}
        </ul>

        <input type="text" ref='todo_text'/>
        <button onClick={() => {
          addTodo(this.refs.todo_text.value)
          this.refs.todo_text.value = ''
        }}>ADD</button>
      </div>
    )
  }
})
