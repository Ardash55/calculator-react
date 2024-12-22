// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function Interface() {
  let [one, setOne] = useState('');
  let [two, setTwo] = useState('');
  let [action, setAction] = useState(0);

  function check() {
    if (action == 1) {
      setOne(one = String(Number(one) + Number(two)))
    } else if (action == 2) {
      setOne(one = String(Number(one) - Number(two)))
    } else if (action == 3) {
      setOne(one = String(Number(one) * Number(two)))
    } else if (action == 4) {
      setOne(one = String(Number(one) / Number(two)))
    }
  }

  return (
    <div>
      <div className='topLine'>{one}</div>
      <div>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '1')
          } else {
            setOne(one + 1)
          }
        }}>1</button>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '2')
          } else {
            setOne(one + 2)
          }
        }}>2</button>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '3')
          } else {
            setOne(one + 3)
          }
        }}>3</button>
      </div>
      <div>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '4')
          } else {
            setOne(one + 4)
          }
        }}>4</button>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '5')
          } else {
            setOne(one + 5)
          }
        }}>5</button>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '6')
          } else {
            setOne(one + 6)
          }
        }}>6</button>
      </div>
      <div>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '7')
          } else {
            setOne(one + 7)
          }
        }}>7</button>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '8')
          } else {
            setOne(one + 8)
          }
        }}>8</button>
        <button className='buttonNumber' onClick={() => {
          if (one === '') {
            setOne(one = '9')
          } else {
            setOne(one + 9)
          }
        }}>9</button>
      </div>
      <div>
        <button className='buttonZero' onClick={() => {
          if (one === '') {
            setOne(one = '0')
          } else {
            setOne(one + 0)
          }
        }}>0</button>
      </div>

      <div>
        <div>
          <button className='action' onClick={() => {
            setTwo(two = one);
            setOne(one = '');
            setAction(action = 1);
          }
          }>+</button>
          <button className='action' onClick={() => {
            setTwo(two = one);
            setOne(one = '');
            setAction(action = 2);
          }}>-</button>
          <button className='action' onClick={() => {
            setTwo(two = one);
            setOne(one = '');
            setAction(action = 3);
          }}>*</button>
          <button className='action' onClick={() => {
            setTwo(two = one);
            setOne(one = '');
            setAction(action = 4);
          }}>/</button>
        </div>
        <button className='check' onClick={() => {
          if (action == 1) {
            setOne(one = String(Number(one) + Number(two)))
          } else if (action == 2) {
            setOne(one = String(Number(two) - Number(one)))
          } else if (action == 3) {
            setOne(one = String(Number(one) * Number(two)))
          } else if (action == 4) {
            setOne(one = String(Number(two) / Number(one)))
          }
        }}>=</button>
      </div>
    </div>
  )
}

function App() {
  return <Interface />
}

export default App;
