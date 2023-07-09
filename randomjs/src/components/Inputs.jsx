export default function Inputs() {
    return (
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <input className="form-control" style={{width: '25rem'}}/>
            <i class="bi bi-trash-fill" style={{color: 'purple', cursor: 'pointer'}}></i>
        </div>
    )
}