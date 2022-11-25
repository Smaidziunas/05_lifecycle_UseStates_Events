import './App.css';
import Title from './components/Title';
import MainTitle from './components/MainTitle';
import Counter from './counters/Counter';

function App() {
  console.log('App.jsx created');

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className='App'>
      <MainTitle />
      <Counter />
      {/* <Title>Events and Hooks</Title> */}
    </div>
  );
}

export default App;
