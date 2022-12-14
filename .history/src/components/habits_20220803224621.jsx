import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name:'Reading', count: 0},
      { id: 2, name:'Running', count: 0},
      { id: 3, name:'Coding', count: 0},
    ],
  };
  handleIncrement = (habit) => {
    console.log(...this.state.habits);
    const habits = [...this.state.habits];
    this.setState(this.state);
  }

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
  }

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  }

  render() {
    return (
      <ul>
      {this.state.habits.map(habit => (
          <Habit 
          key={habit.id} 
          habit={habit} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;