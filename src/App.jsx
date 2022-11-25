import './App.css';
import Title from './components/Title';
import MainTitle from './components/MainTitle';

import Users from './components/Users';
import { useState } from 'react';
import Counter from './counters/Counter';

function App() {
  console.log('App.jsx created');
  const [showUsers, setShowUsers] = useState(true);

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className='App container'>
      <button onClick={() => setShowUsers(!showUsers)}>toggle Users</button>
      <MainTitle />

      {/* <Title>Events and Hooks</Title> */}
      {/* <Counter /> */}
      <Counter>Push Ups</Counter>

      {/* {!showUsers && <Counter />}
      {showUsers && <Users />} */}
    </div>
  );
}

export default App;
