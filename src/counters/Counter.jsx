import { useState } from 'react';
import './counter.css';

function Counter() {
  // 1. State CounterValue, useState
  /*
  const stateArr = useState(0);
  console.log('stateArr ===', stateArr);

  const counterValue = stateArr[0];
  const setCounterValue = stateArr[1];
  */
  const [counterValue, setCounterValue] = useState(0);
  // counterClass state;
  const [counterClass, setCounterClass] = useState();

  // 2. increaseHandler, decreaseHandler fn kurios didins ir mazins skaitliuk

  function incrementHandler() {
    // grazinti previousCounterValue++ negerai, nes reikia grazinti pokyti, bet ne reiksme;
    setCounterValue((previousCounterValue) => {
      // patikrinti ar > 5 ir jeigu taip prideti klase high
      return previousCounterValue + 1 > 5
        ? setCounterClass('high')
        : previousCounterValue + 1;
    });
  }

  // !!! reiksme++ != reiksme + 1

  return (
    <div className='counter'>
      <h3 className={`counter__value ${counterClass}`}>Counter</h3>
      <h2>{counterValue}</h2>
      <div className='control'>
        <button onClick={incrementHandler}>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default Counter;
