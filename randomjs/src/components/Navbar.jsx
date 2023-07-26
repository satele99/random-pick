export default function Navbar(props) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid" style={{justifyContent: 'space-around'}}>
                <span className="navbar-brand mb-0 h1">Random Pick</span>
                <span>
                    <button onClick={props.toggle} className="btn btn-success" >Randomize</button>
                </span>
            </div>
        </nav>
    )
}