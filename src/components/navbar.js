import { Button } from 'react-bootstrap'
import { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const login = document.getElementById("loginButton")
        const logout = document.getElementById("logoutButton")

        if(localStorage.getItem('nip') == null && localStorage.getItem('nama') == null) {
            logout.style.visibility = 'hidden'
            login.style.visibility = 'visible'
        } else {
            login.style.visibility = 'hidden'
            logout.style.visibility = 'visible'
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('nip')
        localStorage.removeItem('name')
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#FF0000", width: "100vw"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={require('./item/PDI_Perjuangan.png')} width="50" />
                </a>
                <a className="nav-link" href="/dashboard" style={{ fontWeight: "900" }}>Dashboard</a>
                <div className="collapse navbar-collapse" id="navbarCollapse" style={{justifyContent: "flex-end"}} >
                    <Button className="d-flex" id='loginButton' style={{float: "right"}} href="/login">Login</Button>
                    <Button className="d-flex" id='logoutButton' style={{float: "right"}} onClick={() => logout()} href="/login">Logout</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar