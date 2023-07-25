import './App.css';
import Navbar from './components/Navbar';
import Inputs from './components/Inputs'
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    let inputText = document.getElementById('text_input');
    inputText.value = ''
    console.log(text)
  }
  return (
    <div className="App">
      <Navbar/>
      <form onSubmit={submit}>
        <label for="text_input">Enter Text Here:</label>
        <div className='format'>
          <input onChange={(e)=> {setText(e.target.value)}} id='text_input' className="form-control mr-sm-2" type='text'/>
          <button className="btn btn-outline-success">Add</button>
        </div>
      </form>
      <section className='task_container'>
        <Inputs/>
      </section>
    </div>
  );
}

export default App;
