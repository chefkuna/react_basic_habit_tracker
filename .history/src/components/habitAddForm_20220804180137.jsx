import React, { PureComponent } from 'react';
import React from 'react';

const HabitAddForm = (props) => {
  const inputRef = React.createRef();
  
  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  return (
    <form className="add-form" onSubmit={this.onSubmit}>
      <input 
        ref={this.inputRef}
        type="text" 
        className="add-input" 
        placeholder='Enter your habit...'/>
      <button className="add-button">Add</button>
    </form>
  );  
}

export default HabitAddForm;