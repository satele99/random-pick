export default function Modal(props) {
    return (
        <div id="modal">
            <div className="modal_content">
                <div className="modal-header">
                    <span className="close"onClick={props.close}>&times;</span>
                </div>
                <div className="modal-body">
                    <input className="form-control" style={{width: '25rem'}}/>
                </div>
                <div className="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>
    )
}