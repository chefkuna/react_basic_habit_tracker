import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name:'Reading', count: 0},
      { id: 2, name:'Running', count: 0},
      { id: 3, name:'Coding', count: 0},
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits: habits});
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits: habits})
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits: habits});
    
  }

  render() {
    return (
      <Navbar />
      <Habits 
        habits={this.state.habits} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default App;
