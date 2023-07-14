import Inputs from "./Inputs"
import { useState } from "react"

export default function Modal(props) {
    const [text, setText] = useState('')
    let [task, setTask] = useState([])
    let [style, setStyle] = useState('none')
    
    const updateText = (event) => {
        setText(event.target.value)
    }

    const addTask = () => {
        setTask([...task, text])
    }

    return (
        <div id="modal" onClick={props.close}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close" id="closeicon" onClick={props.close}>&times;</span>
                </div>
                <div className="modal-body">
                    <button className="circle" onClick={addTask}>+</button>
                    <input onChange={updateText} className="form-control" style={{width: '25rem', marginRight: '26px'}}/>
                    {
                        task.map((item, index) => {
                            return (
                                <Inputs id={index} text={item}/>
                            )
                        })
                    }
                </div>
                <div className="modal-footer">
                    <button style={{borderColor: 'purple', color: '#000', fontWeight: '600', width:'6rem', display: `${style}`}} className="btn btn-outline-light rm-hover">ADD</button>
                </div>
            </div>
        </div>
    )
}