import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
    <>
      <span className="habit-name">Reading</span>
      <span className="habit-count">3</span>
      <button className='habit-button habit-increase'>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button className='habit-button habit-decrease'>
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button className='habit-button habit-delete'>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
    )
  }
}

export default Habit;