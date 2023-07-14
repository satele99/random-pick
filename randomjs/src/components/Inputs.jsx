export default function Inputs(props) {

    return (
        <>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <input className="form-control" style={{width: '25rem'}} defaultValue={props.text}/>
                <i id={props.id} class="bi bi-trash-fill" style={{color: 'purple', cursor: 'pointer'}}></i>
            </div>
        </>
    )
}