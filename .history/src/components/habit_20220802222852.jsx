import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
    <>
      <span className="habit-name">Reading</span>
      <span className="habit-count">3</span>
      <button>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button>
        <i className="fa-solid fa-square-minus"></i>
      </button>
    </>
    )
  }
}

export default Habit;