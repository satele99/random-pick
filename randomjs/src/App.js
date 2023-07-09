import './App.css';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  
  const openModal = () => {
    const modaSet = document.getElementById('modal')
    modaSet.style.display = 'block'
  }
  const closeModal = () => {
    const modaSet = document.getElementById('modal')
    modaSet.style.display = 'none'
  }
  return (
    <div className="App">
      <Navbar open={openModal}/>
      <Modal close={closeModal}/>
    </div>
  );
}

export default App;
