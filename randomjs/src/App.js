import './App.css';
import Navbar from './components/Navbar';
import Inputs from './components/Inputs'
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    let inputText = document.getElementById('text_input');
    inputText.value = ''
    const newTask = [...task, text]
    setTask(newTask)
  }

  const deleteThis = (index) => {
    const updateTask = [...task]
    updateTask.splice(index, 1)
    setTask(updateTask);
  }
  // onSubmit I want to take the text and create a new task.
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
        {
          task.map((item, index) => (
            <Inputs text={item} key={index} delete={()=> {deleteThis(index)}}/>
          ))
        }
      </section>
    </div>
  );
}

export default App;
