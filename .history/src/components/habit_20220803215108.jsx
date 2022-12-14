import React, { Component } from 'react';

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  }

  handleDecrement = () => {
    this.props.onIncrement(this.props.habit);
  }

  handleDelete = () => {
    this.props.onIncrement(this.props.habit);
  }


  render() {
    const {name, count} = this.props.habit;
    return (
    <li className='habit'>
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button 
        className='habit-button habit-increase' 
        onClick={this.handleIncrement}
      >
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button 
        className='habit-button habit-decrease' 
        onClick={this.handleDecrement}
      >
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button 
        className='habit-button habit-delete' 
        onClick={this.handleDelete}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
    )
  }
}

export default Habit;