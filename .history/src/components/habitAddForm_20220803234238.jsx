import React, { Component } from 'react';

class HabitAddForm extends Component {
  onSubmit = event => {
    event.preventDeFault();
    console.log('submit!');
  }
  
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input type="text" className="add-input" placeholder='Enter your habit...'/>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;