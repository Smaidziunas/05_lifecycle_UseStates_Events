import { useState } from 'react';
import './counter.css';

function Counter(props) {
  let cl = '';
  let clm = '';

  // function title() {
  //   // return props.children;
  //   if (props.children === '') {
  //     return props.children === '';
  //   } else {
  //     return props.children;
  //   }
  // }

  // 1. State CounterValue, useState
  /*
  const stateArr = useState(0);
  console.log('stateArr ===', stateArr);

  const counterValue = stateArr[0];
  const setCounterValue = stateArr[1];
  */

  const [counterValue, setCounterValue] = useState(props.initValue);
  // counterClass state;
  const [counterClass, setCounterClass] = useState('');

  // tikrinam ar reiksme daugiau nei 5:
  // 2. increaseHandler, decreaseHandler fn kurios didins ir mazins skaitliuk

  function incrementHandler() {
    // grazinti previousCounterValue++ negerai, nes reikia grazinti pokyti, bet ne reiksme;
    setCounterValue((previousCounterValue) => {
      // patikrinti ar > 5 ir jeigu taip prideti klase high
      // return previousCounterValue + 1 > 5
      //   ? setCounterClass('high')
      //   : previousCounterValue + 1;
      return previousCounterValue + 1 > -5 ? previousCounterValue + 1 : 0;
    });
  }

  function incrementHandlerMinus() {
    setCounterValue((previousCounterValue) => {
      return previousCounterValue - 1 > -5 ? previousCounterValue - 1 : 0;
    });
  }

  function add10Counters() {
    setCounterValue((previousCounterValue) => previousCounterValue + 10);
  }

  if (counterValue > 5) {
    // setCounterClass('high');
    cl = 'high';
  } else if (counterValue < 0) {
    clm = 'low';
  }

  function resetFn() {
    setCounterValue(0);
  }

  // !!! reiksme++ != reiksme + 1

  return (
    <div className='counter'>
      {/* <h3>{!props.children ? 'Counter' : props.children}</h3> */}
      <h3>{props.children || 'Counter'}</h3>

      <h2 className={`counter__value ${cl} ${clm}`}>{counterValue || 0}</h2>
      <div className='control'>
        <button onClick={incrementHandler}>+</button>

        <button className='resetBtn' onClick={resetFn}>
          Reset
        </button>
        <button disabled={counterValue === -4} onClick={incrementHandlerMinus}>
          -
        </button>
        <button className='add10Btn' onClick={add10Counters}>
          Counter +10
        </button>
      </div>
    </div>
  );
}

export default Counter;
