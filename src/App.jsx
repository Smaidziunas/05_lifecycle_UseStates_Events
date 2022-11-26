import './App.css';
import Title from './components/Title';
import MainTitle from './components/MainTitle';
import Users from './components/Users';
import { useState } from 'react';
import Clock from './components/Clock';
import Counter from './counters/Counter';
import Counterlist from './components/Counterlist';

function App() {
  console.log('App.jsx created');
  const [showUsers, setShowUsers] = useState(true);

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className='App container'>
      {/* <Counter>PushUps</Counter> */}
      {/* {!showUsers && <Clock />}
      <button onClick={() => setShowUsers(!showUsers)}>toggle Users</button>
      <MainTitle /> */}

      {/* <Title>Events and Hooks</Title> */}
      {/* <Counter /> */}

      {/* {!showUsers && <Counter>Push Ups</Counter>}
      {showUsers && <Users />} */}
      <Counterlist />
      {/* <Counter initValue='40' /> */}
    </div>
  );
}

export default App;
