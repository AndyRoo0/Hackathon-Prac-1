import React, { useState } from 'react';

function Input() {
  const [newTask, setNewTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    console.log(e.target.value);
    setNewTask(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task: <input type='text' name='newTask' onChange={handleChange} />
      </label>
      <input type='button' value='Submit' />
    </form>
  );
}

export default Input;
