import React, { useState } from 'react';
import Number from './number/number.js';

import './App.css';

function App() {
    const[no1, setNo1] = useState(0);
    const[no2, setNo2] = useState(0);
    const[no3, setNo3] = useState(0);
    const[no4, setNo4] = useState(0);
    const[no5, setNo5] = useState(0);
    const[no6, setNo6] = useState(0);

  function clickEvent(e){
    let arr = [];
    for(let i = 0; i < 6; i++){
      arr[i] = Math.floor(Math.random() * 45) + 1;
      for(let j = 0; j < i; j++){
        if(arr[j] === arr[i]){
          i--;
          break;
        }
      }
    }
    arr.sort(function(a, b) { // 오름차순
      return a - b;
    });
    setNo1(arr[0]);
    setNo2(arr[1]);
    setNo3(arr[2]);
    setNo4(arr[3]);
    setNo5(arr[4]);
    setNo6(arr[5]);
  }
  return (
    <div className="App">
      <Number className="numbers" no1={no1} no2={no2} no3={no3} no4={no4} no5={no5} no6={no6}/>
      <button className="button" onClick ={clickEvent}>
            생성
      </button>
      <div className="divider"></div>
    </div>
  );
}

export default App;
