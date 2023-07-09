export default function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid" style={{justifyContent: 'space-around'}}>
                <span class="navbar-brand mb-0 h1">Random Pick</span>
                <span>
                    <button className="btn btn-outline-success circle">+</button>
                </span>
            </div>
        </nav>
    )
}