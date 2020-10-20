import React from 'react';

const Form = ({ handleInputChange, value, handleAddTodo }) => {
  return (
    <>
      <input onChange={handleInputChange} value={value}></input>
      <button onClick={handleAddTodo}>Add todo</button>
    </>
  );
};

export default Form