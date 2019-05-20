import React, {useState} from 'react';
import './App.css';
import { StateExample } from './components/StateExample';
import { EffectExample } from './components/EffectExample';

function App() {
  const [example, setExample] = useState('state');

  const chooseExample = () => setExample(document.getElementById('selectExample').value);

  return (
    <>
      <select onChange={chooseExample} id="selectExample">
        <option value="state">State example</option>
        <option value="effect">Effect example</option>
      </select>
      <h3>
        {example} example
      </h3>
      <div>
        {example === 'state' && <StateExample/>}
        {example === 'effect' && <EffectExample/>}
      </div>
    </>
  );
}

export default App;
