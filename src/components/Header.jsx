import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import '../styles/css/Header.css'



function Header(){

return (
    <header className="Header__Container">
        <div className="Header__Logo">
            <img src={logo} alt='logo de Kasa'></img>
        </div>
        <nav >
            <Link className="Header__Link" to="/" >Acceuil</Link>
            <Link className="Header__Link" to="/Apropos">A propos</Link>

        </nav>
    </header>
)

}

export default Header