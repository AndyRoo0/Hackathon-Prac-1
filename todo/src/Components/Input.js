import React from 'react';

function Input() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form>
      <label>
        New Task: <input type='text' name='newTask' />
      </label>
      <input type='submit' value='submit' />
    </form>
  );
}

export default Input;
