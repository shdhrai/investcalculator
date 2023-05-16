import { useState } from 'react';
import './App.css';

function App() {

  const [amount ="", setAmount] = useState();
  const [dividend, setDividend] = useState();
  const [income, setIncome] = useState();

  const clickHandler = () => {
    const a = income * (100 / dividend);
    setAmount(Math.trunc(a));
  };

  return (
    <div className="App">
      <form >
        <div className='form-div'>
          <p>Dividend Yield </p>

          <input value={dividend} placeholder='Dividend Yield' type='number'
            onChange={(e) => { setDividend(e.target.value) }}>
          </input>

          <p>Target Income</p>

          <input value={income} placeholder='Target Income' type='number'
            onChange={(e) => { setIncome(e.target.value) }}>
          </input>

          <br></br>

          <button type='button' onClick={clickHandler} >Submit</button>

          <p>You will have to invest {amount}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
