import { Container } from 'react-bootstrap'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: "#FF0000"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={require('./item/PDI_Perjuangan.png')} width="50" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar