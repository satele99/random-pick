export default function Navbar(props) {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid" style={{justifyContent: 'space-around'}}>
                <span class="navbar-brand mb-0 h1">Random Pick</span>
                <span>
                    <button className="circle" onClick={props.open}>+</button>
                </span>
            </div>
        </nav>
    )
}