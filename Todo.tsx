import React, { useState } from 'react';

export default function TODO() {
  const [todo, SetTodo] = useState('');
  const [todos, SetTodos] = useState([]);

  function handleInput(e) {
    e.preventDefault();
    SetTodo(e.target.value);
    console.log(todo);
  }

  function handleTodo(e) {
    e.preventDefault();
    if (todo !== '') {
      SetTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
    console.log(todos);
    // clear out the input box
    SetTodo('');
  }

  return (
    <div className="todocontainer">
      <form>
        <input onChange={handleInput}></input>
        <button onClick={handleTodo}> ADD</button>
      </form>
      <div>
        {todos.map((item, index) => {
          return (
            <div>
              <span key={index}>{item.text}</span>
              <button>Del</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
