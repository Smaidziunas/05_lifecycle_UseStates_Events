import { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  function sizeHandler() {
    console.log('size');
    seth1Size('3rem');
  }

  const [h1Size, setH1Size] = useState('1rem');
  // const h1Size = '1rem';
  // function sizeHandler() {
  //   console.log('size to 3rem');
  //   setH1Size('3rem');
  // }

  function increaseTitleSizeHandler() {
    setH1Size((prevH1Size) => {
      // pasiimti dabartine reiksme
      console.log('prevH1Size ===', prevH1Size);
      // issitraukti skaitine dali
      let skDalisBeRem = parseFloat(prevH1Size);
      console.log('skDalisBeRem ===', skDalisBeRem);
      // ja padidinti
      skDalisBeRem++;
      // prideti atgal 'rem'
      const padidintaSuRem = skDalisBeRem + 'rem';
      // setitini state su reiksme
      return skDalisBeRem > 10 ? setH1Size('2rem') : `${skDalisBeRem}rem`;
    });
  }

  function h1to2rem() {
    setH1Size('2rem');
    return h1Size;
  }

  console.log('App.jsx created');
  return (
    <div className='App'>
      <h1 onClick={increaseTitleSizeHandler} style={{ fontSize: h1Size }}>
        Lifecycle
      </h1>
      <h1 onClick={h1to2rem}>change</h1>
      <Title>Events and Hooks</Title>
    </div>
  );
}

{
  /* grazinti h1 dydi i 2rem */
}

<button>reset</button>;

export default App;
