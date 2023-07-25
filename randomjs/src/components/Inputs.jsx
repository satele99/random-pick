export default function Inputs(props) {

    
    return (
        <>
            <div className="task">
                <h6 style={{marginTop: '5px'}}>{props.text}</h6>
                <i onClick={props.delete} class="bi bi-trash-fill" style={{color: 'purple', cursor: 'pointer'}}></i>
            </div>
        </>
    )
}