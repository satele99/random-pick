import './App.css';
import Navbar from './components/Navbar';
import Inputs from './components/Inputs'
import { useState } from 'react';
import Popup from './components/Modal';

function App() {
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);
  const [random, setRandom] = useState('No items added. Please add items first.')

  const [modal, setModal] = useState(false)

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

  const getRandomElement = (arr) => {
    if(arr.length < 1){
      return
    }
    const randomIndex = Math.floor(Math.random() * arr.length)
    let selection = arr[randomIndex]
    setRandom(selection) 
  }

  const toggleModal = () => {
    setModal(!modal)
    getRandomElement(task)
  }


  return (
    <div className="App">
      <Navbar toggle={()=> {toggleModal()}}/>
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
      <Popup open={modal} close={()=> {toggleModal()}} text={random}/>
    </div>
  );
}

export default App;
