import './app.css';

function App() {
  const name = 'ellie';
  return (
    <>
      <h1>Hello {name}</h1>
  {
    ['🍓', '🐔'].map(item => (<h1>item</h1>));
  }
  </>
  )
}

export default App;
