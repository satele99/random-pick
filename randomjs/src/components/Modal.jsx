import Inputs from "./Inputs"

export default function Modal(props) {
    return (
        <div id="modal" onClick={props.close}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close" id="closeicon" onClick={props.close}>&times;</span>
                </div>
                <div className="modal-body">
                    <button className="circle">+</button>
                    <input className="form-control" style={{width: '25rem', marginRight: '26px'}}/>
                    <Inputs/>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-light">ADD</button>
                </div>
            </div>
        </div>
    )
}