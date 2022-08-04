import React from 'react';

const HabitAddForm = (props) => {
  const inputRef = React.createRef();
  
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input 
        ref={inputRef}
        type="text" 
        className="add-input" 
        placeholder='Enter your habit...'/>
      <button className="add-button">Add</button>
    </form>
  );  
}

export default HabitAddForm;